package models

import (
	"../repositories"
	"../tools"
	"github.com/rushteam/gosql"
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

func GetPlayerByName(name string) *Player {
	SQLPlayer := &repositories.SQLPlayer{}
	err := repositories.DBEngine.Fetch(SQLPlayer,
		gosql.Where("name", name),
	)

	if err != nil && err.Error() == "sql: no rows in result set" {
		return nil
	}
	tools.Check(err)

	return getPlayerFromSQLPlayer(*SQLPlayer)
}

func getPlayerFromSQLPlayer(SQLPlayer repositories.SQLPlayer) *Player {
	var playerSnapshots []PlayerSnapshot
	err := repositories.DBEngine.FetchAll(&playerSnapshots,
		gosql.Where("player_id", SQLPlayer.ID),
	)
	tools.Check(err)

	var matches []*CalculatedMatch
	for _, playerMatch := range playerSnapshots {
		match := GetMatchByID(playerMatch.MatchID)
		matches = append(matches, match)
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
	res, err := repositories.DBEngine.Insert(SQLObject)
	tools.Check(err)
	insertID, _ := res.LastInsertId()

	return insertID
}

func (p *Player) CreateSnapshot(isRed bool) *PlayerSnapshot {
	snapshot := &PlayerSnapshot{
		PlayerID:   p.ID,
		PlayerName: p.Name,
		Rating:     p.Rating,
		IsRed:      isRed,
	}
	res, err := repositories.DBEngine.Insert(snapshot)
	tools.Check(err)
	insertID, _ := res.LastInsertId()
	snapshot.ID = insertID

	return snapshot
}

func UpdatePlayer(PlayerID int64, win bool, goalsScored int64, goalsLost int64, ratingChange float32) {
	player := &repositories.SQLPlayer{}
	err := repositories.DBEngine.Fetch(player,
		gosql.Where("id", PlayerID))
	tools.Check(err)
	if win {
		player.Wins = player.Wins + 1
	} else {
		player.Losses = player.Losses + 1
	}
	player.GoalsScored += goalsScored
	player.GoalsLost += goalsLost
	player.Rating += ratingChange

	_, err = repositories.DBEngine.Update(player, gosql.Where("id", PlayerID))
	tools.Check(err)

}
