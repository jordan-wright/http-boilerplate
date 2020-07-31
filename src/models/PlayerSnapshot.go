package models

import (
	"../repositories"
	"../tools"
)

// PlayerSnapshot - snapshot of player in history
type PlayerSnapshot struct {
	ID         int64   `db:"id"`
	PlayerID   int64   `db:"player_id"`
	PlayerName string  `db:"player_name"`
	MatchID    int64   `db:"match_id"`
	Rating     float32 `db:"rating"`
	IsRed      bool    `db:"is_red"`
}

// TableName .
func (u *PlayerSnapshot) TableName() string {
	return "player_snapshot"
}

// UpdateMatchID .
func (u *PlayerSnapshot) UpdateMatchID(matchID int64) {
	snap := &PlayerSnapshot{}
	err := repositories.DBEngine.First(snap, "id = ?", u.ID)
	tools.Check(err.Error)
	snap.MatchID = matchID

	err = repositories.DBEngine.Save(snap)
	tools.Check(err.Error)
}
