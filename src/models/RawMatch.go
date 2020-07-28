package models

import (
	"encoding/json"

	"../repositories"
	"../tools"
	"github.com/rushteam/gosql"
)

// RawMatch - data parsed from replay
type RawMatch struct {
	ID                int64  `db:"uid,pk"`
	Time              string `db:"time"`
	RawPositionsAtEnd string `db:"positions"`
	Teams             struct {
		Red  []string
		Blue []string
	}
	Score struct {
		Red  int64
		Blue int64
	}
}

func (rm RawMatch) InsertIntoDB(DBEngine *gosql.PoolCluster) int64 {
	result, err := DBEngine.Insert(&rm)
	tools.Check(err)
	insertID, _ := result.LastInsertId()
	return insertID
}

func (rm RawMatch) CreateSQLEntity() repositories.SQLRawMatch {
	SQLRawMatch := &repositories.SQLRawMatch{}
	SQLRawMatch.Time = rm.Time
	SQLRawMatch.RawPositionsAtEnd = rm.RawPositionsAtEnd
	SQLRawMatch.RedScore = rm.Score.Red
	SQLRawMatch.BlueScore = rm.Score.Blue
	redPlayers, _ := json.Marshal(rm.Teams.Red)
	SQLRawMatch.RedPlayers = string(redPlayers)

	bluePlayers, _ := json.Marshal(rm.Teams.Blue)
	SQLRawMatch.BluePlayers = string(bluePlayers)

	return *SQLRawMatch
}
