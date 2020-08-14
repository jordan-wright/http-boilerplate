package main

import (
	"encoding/json"
	"fmt"
	"log"
	"math"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"

	"./src/controllers"
	"./src/models"
	"./src/repositories"
	"./src/tools"
	"github.com/jinzhu/gorm"
)

var startingRating float32 = 1000.0

//DBEngine is just what you think it is
var DBEngine *gorm.DB = controllers.InitializeDB()

func regenerateData(w http.ResponseWriter, r *http.Request) {
	startTime := time.Now()
	controllers.TruncateAll()
	filepath.Walk(controllers.ParsedReplayFolder, func(path string, info os.FileInfo, err error) error {
		if info.IsDir() {
			return nil
		}
		if filepath.Ext(path) == ".json" {
			// repositories.DBEngine = controllers.InitializeDB()
			controllers.ProcessReplayFromFile(strings.Trim(info.Name(), ".bin.json"))
			log.Print(".")
			// repositories.DBEngine.Close()
			// time.Sleep(2 * time.Second)
		}
		return nil
	})
	log.Println("\n" + time.Now().Sub(startTime).String())
	// TODO: calculate everything from unparsed replays

}

func regenerateParsedReplays(w http.ResponseWriter, r *http.Request) {
	filepath.Walk(controllers.UnparsedReplayFolder, func(path string, info os.FileInfo, err error) error {
		if info.IsDir() {
			return nil
		}
		if filepath.Ext(path) == ".hbr2" {
			controllers.ParseReplay(info.Name())
		}
		return nil
	})

}

func parseReplay(w http.ResponseWriter, r *http.Request) {
	startTime := time.Now()
	matchID := controllers.ProcessReplay(r)

	match := models.GetMatchByID(matchID)

	outputMessage := controllers.ExportHTML(*match)
	fmt.Fprintf(w, outputMessage+"\n"+(time.Now().Sub(startTime).String()))
}

func findTeams(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	playerNames, _ := r.URL.Query()["players[]"]
	if len(playerNames) < 2 {
		fmt.Fprintf(w, string("not enough players"))
		return
	}
	var playerIDs []int
	playerData := make(map[int]*models.Player)
	for _, playerName := range playerNames {
		playerObject := models.GetPlayerByName(playerName)
		playerData[int(playerObject.ID)] = playerObject
		playerIDs = append(playerIDs, int(playerObject.ID))
	}
	allPermutations := tools.Permutations(playerIDs)
	minDiff := 10000.00
	var permID int
	for permutationID, permutation := range allPermutations {
		var team1sum, team2sum float32
		for i := 0; i < len(permutation)/2; i++ {
			team1sum += playerData[permutation[i]].Rating
		}
		for i := len(permutation) / 2; i < len(permutation); i++ {
			team2sum += playerData[permutation[i]].Rating
		}
		diff := math.Abs(float64(team1sum - team2sum))
		if diff < minDiff {
			minDiff = diff
			permID = permutationID

		}
	}
	var teamRed, teamBlue []models.Player

	for i := 0; i < len(allPermutations[permID])/2; i++ {
		teamRed = append(teamRed, *playerData[allPermutations[permID][i]])
	}
	for i := len(allPermutations[permID]) / 2; i < len(allPermutations[permID]); i++ {
		teamBlue = append(teamBlue, *playerData[allPermutations[permID][i]])
	}
	diff := float32(minDiff) / float32(len(teamRed))
	outputData := struct {
		Red  []models.Player
		Blue []models.Player
		Diff float32
	}{
		teamRed,
		teamBlue,
		diff,
	}
	outputMessage, err := json.Marshal(&outputData)
	tools.Check(err)
	w.Header().Set("Content-Type", "application/json")
	fmt.Fprintf(w, string(outputMessage))
}

func main() {
	repositories.DBEngine = controllers.InitializeDB()
	http.HandleFunc("/", HelloServer)
	http.HandleFunc("/regenerate", regenerateData)
	http.HandleFunc("/getLastMatches", controllers.GetLastMatches)
	http.HandleFunc("/getPlayersTable", controllers.GetPlayersTable)
	http.HandleFunc("/p", parseReplay)
	http.HandleFunc("/findTeams", findTeams)
	http.ListenAndServe(":7777", nil)
}

//HelloServer - testing function
func HelloServer(w http.ResponseWriter, r *http.Request) {
	controllers.InitializeDB()
	outputMessage := "<html><head><meta name=\"description\" content=\"" + "123456" + "\"></head><body>" + "456789" + "</body></html>"

	fmt.Fprintf(w, outputMessage)
}
