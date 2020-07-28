package repositories

import (
	"log"

	"../tools"
	"github.com/rushteam/gosql"
)

type SQLRawMatch struct {
	ID                int64  `db:"id"`
	Time              string `db:"time"`
	RawPositionsAtEnd string `db:"positions"`
	RedScore          int64  `db:"red_score"`
	BlueScore         int64  `db:"blue_score"`
	RedPlayers        string `db:"red_players"`
	BluePlayers       string `db:"blue_players"`
}

func (u *SQLRawMatch) TableName() string {
	return "raw_match"
}

func (u *SQLRawMatch) Insert(DBEngine *gosql.PoolCluster) int64 {
	res, err := DBEngine.Insert(&u)
	insertID, _ := res.LastInsertId()
	tools.Check(err)
	log.Println(res)
	return insertID
}

/*
create table raw_match
(
	id int unique,
	time timestamp null,
	positions varchar(300) null,
	red_score int null,
	blue_score int null,
	red_players varchar(300) null,
	blue_players varchar(300) null,
	constraint raw_match_pk
		primary key (id)
);
*/
