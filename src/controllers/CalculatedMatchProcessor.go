package controllers

import (
	"math"
	"time"

	"../models"
)

var playersDB = make(map[string]*models.Player)

func processPlayersFromTeam(players []string) ([]models.Player, float32) {
	var parsedPlayers []models.Player
	var ratingSum float32 = 0
	for _, rawPlayerName := range players {
		if _, ok := playersDB[rawPlayerName]; !ok {
			var newPlayer models.Player
			newPlayer.ID = len(playersDB) + 1
			newPlayer.Name = rawPlayerName
			newPlayer.Wins = 0
			newPlayer.Losses = 0
			newPlayer.GoalsScored = 0
			newPlayer.GoalsLost = 0
			newPlayer.WinRate = 0
			newPlayer.Rating = 1000
			newPlayer.Matches = []models.RawMatch{}
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

func calculateRatingChange(calculatedMatch models.CalculatedMatch) float32 {
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

func updatePlayers(calculatedMatch models.CalculatedMatch, rawMatch models.RawMatch) {
	for _, player := range calculatedMatch.Teams.Red.Players {
		playersDB[player.Name].Rating += calculatedMatch.Teams.Red.RatingChange
		playersDB[player.Name].Matches = append(playersDB[player.Name].Matches, rawMatch)
		playersDB[player.Name].GoalsScored += calculatedMatch.Teams.Red.Score
		playersDB[player.Name].GoalsLost += calculatedMatch.Teams.Blue.Score

		if calculatedMatch.Teams.Red.Score > calculatedMatch.Teams.Blue.Score {
			playersDB[player.Name].Wins++
		} else {
			playersDB[player.Name].Losses++
		}

		playersDB[player.Name].WinRate = float32(playersDB[player.Name].Wins) / (float32(playersDB[player.Name].Wins) + float32(playersDB[player.Name].Losses))

	}

	for _, player := range calculatedMatch.Teams.Blue.Players {
		playersDB[player.Name].Rating += calculatedMatch.Teams.Blue.RatingChange
		playersDB[player.Name].Matches = append(playersDB[player.Name].Matches, rawMatch)

		playersDB[player.Name].GoalsScored += calculatedMatch.Teams.Blue.Score
		playersDB[player.Name].GoalsLost += calculatedMatch.Teams.Red.Score

		if calculatedMatch.Teams.Blue.Score > calculatedMatch.Teams.Red.Score {
			playersDB[player.Name].Wins++
		} else {
			playersDB[player.Name].Losses++
		}

		playersDB[player.Name].WinRate = float32(playersDB[player.Name].Wins) / (float32(playersDB[player.Name].Wins) + float32(playersDB[player.Name].Losses))

	}
}

func calculateMatch(rawMatch models.RawMatch) models.CalculatedMatch {
	var processedMatch models.CalculatedMatch

	processedMatch.Teams.Red.Players, processedMatch.Teams.Red.AvgTeamRating = processPlayersFromTeam(rawMatch.Teams.Red)
	processedMatch.Teams.Blue.Players, processedMatch.Teams.Blue.AvgTeamRating = processPlayersFromTeam(rawMatch.Teams.Blue)

	processedMatch.Time = processTime(rawMatch.Time)
	processedMatch.Teams.Red.Score = rawMatch.Score.Red
	processedMatch.Teams.Blue.Score = rawMatch.Score.Blue

	processedMatch.Teams.Red.RatingChange = calculateRatingChange(processedMatch)
	processedMatch.Teams.Blue.RatingChange = -processedMatch.Teams.Red.RatingChange

	updatePlayers(processedMatch, rawMatch)

	return processedMatch

}
