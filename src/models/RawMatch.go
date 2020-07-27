package models

import (
	"../tools"
	"github.com/rushteam/gosql"
)

// RawMatch - data parsed from replay
type RawMatch struct {
	ID                int    `db:"uid,pk"`
	Time              string `db:"time"`
	RawPositionsAtEnd string `db:"positions"`
	Teams             struct {
		Red  []string
		Blue []string
	}
	Score struct {
		Red  int
		Blue int
	}
}

func (rm RawMatch) InsertIntoDB(DBEngine *gosql.PoolCluster, id int) gosql.Result {
	rm.ID = id
	result, err := DBEngine.Insert(&rm)
	tools.Check(err)
	return result
}
