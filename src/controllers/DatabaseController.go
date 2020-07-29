package controllers

import (
	//mysql

	_ "github.com/go-sql-driver/mysql"
	"github.com/rushteam/gosql"

	"../models"
)

//InitializeDB initializes DB if not already existing
func InitializeDB() *gosql.PoolCluster {
	db := gosql.NewCluster(
		gosql.AddDb("mysql", "root:root@tcp(127.0.0.1:3306)/referee?parseTime=true&readTimeout=1s&writeTimeout=1s&timeout=1s"),
	)
	gosql.Debug = true
	return db
}

func insertPlayer(DBEngine *gosql.PoolCluster, player models.Player) {
	DBEngine.Insert(player)
}
