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
		gosql.AddDb("mysql", "root:root@tcp(127.0.0.1:3306)/referee?parseTime=true&readTimeout=3s&writeTimeout=3s&timeout=3s"),
	)

	return db
}

func insertPlayer(DBEngine *gosql.PoolCluster, player models.Player) {
	DBEngine.Insert(player)
}
