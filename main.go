package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"math"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"time"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

var startingRating float32 = 1000.0

// Player - person who plays
type Player struct {
	ID      int
	Name    string
	Wins    int
	Losses  int
	Ratio   float32
	Rating  float32
	Matches []RawMatch
}

var playersDB map[string]*Player
var matchesDB []CalculatedMatch

// RawMatch - data parsed from replay
type RawMatch struct {
	Time  string
	Teams struct {
		Red  []string
		Blue []string
	}
	Score struct {
		Red  int
		Blue int
	}
}

//CalculatedMatch - match filled with full match and player data
type CalculatedMatch struct {
	Time  int
	Teams struct {
		Red struct {
			Players       []Player
			AvgTeamRating float32
			Score         int
			RatingChange  float32
		}
		Blue struct {
			Players       []Player
			AvgTeamRating float32
			Score         int
			RatingChange  float32
		}
	}
}

func processPlayersFromTeam(players []string) ([]Player, float32) {
	var parsedPlayers []Player
	var ratingSum float32 = 0
	for _, rawPlayerName := range players {
		if _, ok := playersDB[rawPlayerName]; !ok {
			var newPlayer Player
			newPlayer.ID = len(playersDB) + 1
			newPlayer.Name = rawPlayerName
			newPlayer.Wins = 0
			newPlayer.Losses = 0
			newPlayer.Ratio = 0
			newPlayer.Rating = 1000
			playersDB[rawPlayerName] = &newPlayer
		}
		parsedPlayers = append(parsedPlayers, *playersDB[rawPlayerName])
		ratingSum += playersDB[rawPlayerName].Rating
	}
	return parsedPlayers, (ratingSum / float32(len(parsedPlayers)))
}

func processTime(timeString string) int {
	layout := "2006-01-02 15:04"
	t, err := time.Parse(layout, timeString)
	if err != nil {
		panic("Can't parse time format")
	}

	return int(t.Unix())
}

func calculateRatingChange(calculatedMatch CalculatedMatch) float32 {
	kCoefficient := float32(50)

	ratingDifference := calculatedMatch.Teams.Blue.AvgTeamRating - calculatedMatch.Teams.Red.AvgTeamRating
	powerPiece := math.Pow(10, float64(ratingDifference/400))
	winChance := float32(1 / (1 + powerPiece))
	scorePerformance := float32(0.5)
	if !(calculatedMatch.Teams.Red.Score+calculatedMatch.Teams.Blue.Score == 0) {
		scorePerformance = float32(calculatedMatch.Teams.Red.Score) / float32(calculatedMatch.Teams.Blue.Score+calculatedMatch.Teams.Red.Score)
	}
	ratingChange := (scorePerformance - winChance) * kCoefficient
	ratingChangePerPlayer := ratingChange / float32(len(calculatedMatch.Teams.Red.Players))
	return ratingChangePerPlayer
}

func updatePlayers(calculatedMatch CalculatedMatch, rawMatch RawMatch) {
	for _, player := range calculatedMatch.Teams.Red.Players {
		playersDB[player.Name].Rating += calculatedMatch.Teams.Red.RatingChange
		playersDB[player.Name].Matches = append(playersDB[player.Name].Matches, rawMatch)
		if calculatedMatch.Teams.Red.Score > calculatedMatch.Teams.Blue.Score {
			playersDB[player.Name].Wins++
		} else {
			playersDB[player.Name].Losses++
		}
		if playersDB[player.Name].Losses > 0 {
			playersDB[player.Name].Ratio = float32(playersDB[player.Name].Wins) / float32(playersDB[player.Name].Losses)
		}
	}

	for _, player := range calculatedMatch.Teams.Blue.Players {
		playersDB[player.Name].Rating += calculatedMatch.Teams.Blue.RatingChange
		playersDB[player.Name].Matches = append(playersDB[player.Name].Matches, rawMatch)
		if calculatedMatch.Teams.Blue.Score > calculatedMatch.Teams.Red.Score {
			playersDB[player.Name].Wins++
		} else {
			playersDB[player.Name].Losses++
		}
		if playersDB[player.Name].Losses > 0 {
			playersDB[player.Name].Ratio = float32(playersDB[player.Name].Wins) / float32(playersDB[player.Name].Losses)
		}
	}
}

func calculateMatch(rawMatch RawMatch) {
	var processedMatch CalculatedMatch
	if rawMatch.Score.Red == 0 && rawMatch.Score.Blue == 0 {
		return
	}

	processedMatch.Teams.Red.Players, processedMatch.Teams.Red.AvgTeamRating = processPlayersFromTeam(rawMatch.Teams.Red)
	processedMatch.Teams.Blue.Players, processedMatch.Teams.Blue.AvgTeamRating = processPlayersFromTeam(rawMatch.Teams.Blue)

	processedMatch.Time = processTime(rawMatch.Time)
	processedMatch.Teams.Red.Score = rawMatch.Score.Red
	processedMatch.Teams.Blue.Score = rawMatch.Score.Blue

	processedMatch.Teams.Red.RatingChange = calculateRatingChange(processedMatch)
	processedMatch.Teams.Blue.RatingChange = -processedMatch.Teams.Red.RatingChange

	updatePlayers(processedMatch, rawMatch)

	matchesDB = append(matchesDB, processedMatch)

}

func generateHTMLTable() string {
	returnValue := "<table><tr><th>Name</th><th>Wins</th><th>Losses</th><th>Ratio</th><th>Rating</th></tr>"
	for _, player := range playersDB {
		returnValue += "<tr><td>" + player.Name + "</td><td>" + strconv.Itoa(player.Wins) + "</td><td>" + strconv.Itoa(player.Losses) + "</td><td>" + fmt.Sprintf("%.2f", player.Ratio) + "</td><td>" + fmt.Sprintf("%.2f", player.Rating) + "</td></tr>"
	}
	returnValue += "</table>"
	return returnValue
}

func readAll(w http.ResponseWriter, r *http.Request) {
	playersDB = make(map[string]*Player)
	matchesDB = matchesDB[:0]

	var files []string

	root := "replayData/"
	err := filepath.Walk(root, func(path string, info os.FileInfo, err error) error {
		if !info.IsDir() {
			files = append(files, path)
		}
		return nil
	})
	check(err)

	for _, file := range files {
		byteValue, err := ioutil.ReadFile(file)
		check(err)

		var match RawMatch
		json.Unmarshal(byteValue, &match)

		calculateMatch(match)
	}

	// var playersData, _ = json.Marshal(playersDB)
	// var matchesData, _ = json.Marshal(matchesDB)
	// fmt.Fprintf(w, "{\"Players\":"+string(playersData)+"},")
	// fmt.Fprintf(w, "{\"Matches\":"+string(matchesData)+"}")
	fmt.Fprintf(w, generateHTMLTable())
}

func main() {
	http.HandleFunc("/", HelloServer)
	http.HandleFunc("/readAll", readAll)
	http.ListenAndServe(":7777", nil)
}

//HelloServer - testing function
func HelloServer(w http.ResponseWriter, r *http.Request) {
	var a = 1
	a = a + a
	fmt.Fprintf(w, "Hello, %s!"+strconv.Itoa(a), r.URL.Path[1:])
}
