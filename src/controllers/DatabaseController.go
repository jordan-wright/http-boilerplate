package controllers

import (
	"../models"
	"../repositories"
	"../tools"
	"github.com/jinzhu/gorm"

	//mysql
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/rushteam/gosql"
)

//InitializeDB initializes DB if not already existing
func InitializeDB() *gorm.DB {
	db, err := gorm.Open("mysql", "root:root@tcp(127.0.0.1:3306)/referee?parseTime=true&readTimeout=1s&writeTimeout=1s&timeout=1s")
	tools.Check(err)

	return db
}

// TruncateAll .
func TruncateAll() {
	repositories.DBEngine.Exec("truncate table referee.downloaded_url;")
	repositories.DBEngine.Exec("truncate table referee.match_calculated;")
	repositories.DBEngine.Exec("truncate table referee.player;")
	repositories.DBEngine.Exec("truncate table referee.player_snapshot;")
	repositories.DBEngine.Exec("truncate table referee.raw_match;")

	/* +
		"truncate table referee.match_calculated; " +
		"truncate table referee.player; " +
		"truncate table referee.player_snapshot; " +
		"truncate table referee.raw_match; ")

	/*
				truncate table downloaded_url;

		truncate table match_calculated;

		truncate table player;

		truncate table player_snapshot;

		truncate table raw_match;


	*/
}

func insertPlayer(DBEngine *gosql.PoolCluster, player models.Player) {
	DBEngine.Insert(player)
}
