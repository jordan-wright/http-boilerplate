package models

import (
	"../repositories"
	"../tools"
	"github.com/rushteam/gosql"
)

// Player - person who plays
type PlayerSnapshot struct {
	ID         int64   `db:"id"`
	PlayerID   int64   `db:"player_id"`
	PlayerName string  `db:"player_name"`
	MatchID    int64   `db:"match_id"`
	Rating     float32 `db:"rating"`
	IsRed      bool    `db:"is_red"`
}

func (u *PlayerSnapshot) TableName() string {
	return "player_snapshot"
}

func (u *PlayerSnapshot) UpdateMatchID(matchID int64) {
	snap := &PlayerSnapshot{}
	err := repositories.DBEngine.Fetch(snap,
		gosql.Where("id", u.ID))
	tools.Check(err)
	snap.MatchID = matchID

	_, err = repositories.DBEngine.Update(snap, gosql.Where("id", snap.ID))
	tools.Check(err)
}
