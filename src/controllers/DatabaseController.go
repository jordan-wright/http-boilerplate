package controllers

import (
	//mysql
	"../models"
	"../repositories"
	_ "github.com/go-sql-driver/mysql"
	"github.com/rushteam/gosql"
)

//InitializeDB initializes DB if not already existing
func InitializeDB() *gosql.PoolCluster {
	db := gosql.NewCluster(
		gosql.AddDb("mysql", "root:root@tcp(127.0.0.1:3306)/referee?parseTime=true&readTimeout=1s&writeTimeout=1s&timeout=1s"),
	)
	gosql.Debug = true
	return db
}

func TruncateAll() {
	repositories.DBEngine.Query("truncate table downloaded_url;" +
		"truncate table match_calculated;" +
		"truncate table player;" +
		"truncate table player_snapshot;" +
		"truncate table raw_match;")
}

func insertPlayer(DBEngine *gosql.PoolCluster, player models.Player) {
	DBEngine.Insert(player)
}
