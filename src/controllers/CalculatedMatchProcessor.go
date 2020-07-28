package controllers

import (
	"math"
	"time"

	"../models"
)

func processPlayersFromTeam(players []string, isRed bool) ([]models.PlayerSnapshot, float32) {
	var parsedPlayers []models.PlayerSnapshot
	var ratingSum float32 = 0
	for _, rawPlayerName := range players {
		player := models.GetPlayerByName(rawPlayerName)
		if player == nil {
			var newPlayer models.Player
			newPlayer.Name = rawPlayerName
			newPlayer.Wins = 0
			newPlayer.Losses = 0
			newPlayer.GoalsScored = 0
			newPlayer.GoalsLost = 0
			newPlayer.WinRate = 0
			newPlayer.Rating = 1000
			newPlayer.Matches = []*models.CalculatedMatch{}
			newPlayer.ID = newPlayer.InsertIntoDB()
			player = &newPlayer
		}
		parsedPlayers = append(parsedPlayers, *player.CreateSnapshot(isRed))
		ratingSum += player.Rating
	}
	return parsedPlayers, (ratingSum / float32(len(parsedPlayers)))
}

func processTime(timeString string) int64 {
	layout := "2006-01-02 15:04"
	t, err := time.Parse(layout, timeString)
	if err != nil {
		panic("Can't parse time format")
	}

	return t.Unix()
}

func calculateRatingChange(calculatedMatch models.CalculatedMatch) float32 {
	kCoefficient := float32(50)

	ratingDifference := calculatedMatch.BlueTeam.AvgTeamRating - calculatedMatch.RedTeam.AvgTeamRating
	powerPiece := math.Pow(10, float64(ratingDifference/400))
	winChance := float32(1 / (1 + powerPiece))
	scorePerformance := float32(0.5)
	if !(calculatedMatch.RedTeam.Score+calculatedMatch.BlueTeam.Score == 0) {
		scorePerformance = float32(calculatedMatch.RedTeam.Score) / float32(calculatedMatch.BlueTeam.Score+calculatedMatch.RedTeam.Score)
	}
	ratingChange := (scorePerformance - winChance) * kCoefficient
	ratingChangePerPlayer := ratingChange / float32(len(calculatedMatch.RedTeam.Players))
	return ratingChangePerPlayer
}

func updatePlayers(cm models.CalculatedMatch) {
	for _, snap := range cm.RedTeam.Players {
		models.UpdatePlayer(
			snap.PlayerID,
			cm.RedTeam.Score > cm.BlueTeam.Score,
			cm.RedTeam.Score,
			cm.BlueTeam.Score,
			cm.RedTeam.RatingChange)
		snap.UpdateMatchID(cm.ID)
	}
	for _, snap := range cm.BlueTeam.Players {
		models.UpdatePlayer(
			snap.PlayerID,
			cm.RedTeam.Score < cm.BlueTeam.Score,
			cm.BlueTeam.Score,
			cm.RedTeam.Score,
			cm.BlueTeam.RatingChange)
		snap.UpdateMatchID(cm.ID)
	}
}

func calculateMatch(rawMatch models.RawMatch) models.CalculatedMatch {
	var processedMatch models.CalculatedMatch

	processedMatch.RedTeam.Players, processedMatch.RedTeam.AvgTeamRating = processPlayersFromTeam(rawMatch.Teams.Red, true)
	processedMatch.BlueTeam.Players, processedMatch.BlueTeam.AvgTeamRating = processPlayersFromTeam(rawMatch.Teams.Blue, false)

	processedMatch.Time = rawMatch.Time
	processedMatch.RedTeam.Score = rawMatch.Score.Red
	processedMatch.BlueTeam.Score = rawMatch.Score.Blue

	processedMatch.RedTeam.RatingChange = calculateRatingChange(processedMatch)
	processedMatch.BlueTeam.RatingChange = -processedMatch.RedTeam.RatingChange

	processedMatch.ID = processedMatch.InsertToDB()
	updatePlayers(processedMatch)

	return processedMatch

}
