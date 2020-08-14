package models

import (
	"../repositories"
	"../tools"
	"github.com/jinzhu/gorm"
)

// Player - person who plays
type Player struct {
	ID          int64
	Name        string
	Wins        int64
	Losses      int64
	GoalsScored int64
	GoalsLost   int64
	WinRate     float32
	Rating      float32
	Matches     []*CalculatedMatch
}

// GetPlayerByName .
func GetPlayerByName(name string) *Player {
	SQLPlayer := &repositories.SQLPlayer{}
	err := repositories.DBEngine.First(SQLPlayer, "name = ?", name)
	if gorm.IsRecordNotFoundError(err.Error) {
		return nil
	}
	tools.Check(err.Error)

	return getPlayerFromSQLPlayer(*SQLPlayer, true)
}

// GetPlayerByID .
func GetPlayerByID(id int) *Player {
	SQLPlayer := &repositories.SQLPlayer{}
	err := repositories.DBEngine.First(SQLPlayer, "id = ?", id)
	if gorm.IsRecordNotFoundError(err.Error) {
		return nil
	}
	tools.Check(err.Error)

	return getPlayerFromSQLPlayer(*SQLPlayer, true)
}

func getPlayerFromSQLPlayer(SQLPlayer repositories.SQLPlayer, withMatches bool) *Player {
	var playerSnapshots []PlayerSnapshot
	err := repositories.DBEngine.Find(&playerSnapshots, "player_id = ?", SQLPlayer.ID)
	tools.Check(err.Error)

	var matches []*CalculatedMatch
	if withMatches {
		for _, playerMatch := range playerSnapshots {
			match := GetMatchByID(playerMatch.MatchID)
			matches = append(matches, match)
		}
	}

	returnObject := Player{
		ID:          SQLPlayer.ID,
		Name:        SQLPlayer.Name,
		Wins:        SQLPlayer.Wins,
		Losses:      SQLPlayer.Losses,
		GoalsScored: SQLPlayer.GoalsScored,
		GoalsLost:   SQLPlayer.GoalsLost,
		WinRate:     SQLPlayer.WinRate,
		Rating:      SQLPlayer.Rating,
		Matches:     matches,
	}

	return &returnObject
}

// InsertIntoDB .
func (p *Player) InsertIntoDB() int64 {
	SQLObject := &repositories.SQLPlayer{
		Name:        p.Name,
		Wins:        p.Wins,
		Losses:      p.Losses,
		GoalsScored: p.GoalsScored,
		GoalsLost:   p.GoalsLost,
		WinRate:     p.WinRate,
		Rating:      p.Rating,
	}
	err := repositories.DBEngine.Save(SQLObject)
	tools.Check(err.Error)

	return SQLObject.ID
}

// CreateSnapshot .
func (p *Player) CreateSnapshot(isRed bool) *PlayerSnapshot {
	snapshot := &PlayerSnapshot{
		PlayerID:   p.ID,
		PlayerName: p.Name,
		Rating:     p.Rating,
		IsRed:      isRed,
	}
	err := repositories.DBEngine.Save(snapshot)
	tools.Check(err.Error)
	return snapshot
}

// UpdatePlayer .
func UpdatePlayer(PlayerID int64, win bool, goalsScored int64, goalsLost int64, ratingChange float32) {
	player := &repositories.SQLPlayer{}
	err := repositories.DBEngine.First(player, "id = ?", PlayerID)
	tools.Check(err.Error)
	if win {
		player.Wins = player.Wins + 1
	} else {
		player.Losses = player.Losses + 1
	}
	player.WinRate = float32(float32(player.Wins) / float32(player.Wins+player.Losses))
	player.GoalsScored += goalsScored
	player.GoalsLost += goalsLost
	player.Rating += ratingChange

	err = repositories.DBEngine.Save(player)
	tools.Check(err.Error)

}

// GetPlayersTable ..
func GetPlayersTable() []Player {
	var SQLObjects []repositories.SQLPlayer
	err := repositories.DBEngine.Order("rating DESC").Find(&SQLObjects)

	if err.Error != nil {
		return nil
	}
	var returnData []Player

	for _, SQLObject := range SQLObjects {
		returnPlayer := getPlayerFromSQLPlayer(SQLObject, false)
		returnData = append(returnData, *returnPlayer)
	}

	return returnData
}
