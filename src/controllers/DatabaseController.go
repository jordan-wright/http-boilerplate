package controllers

import (
	"log"

	_ "github.com/go-sql-driver/mysql"

	"../models"
	"../tools"
	"github.com/go-xorm/xorm"
)

//InitializeDB initializes DB if not already existing
func InitializeDB() {

	engine, err := xorm.NewEngine("mysql", "root:root@tcp(localhost:3306)/referee")
	// DBEngine = engine
	results, err := engine.Query("select * from players")

	err = engine.Sync2(new(models.TestStruct))
	tools.Check(err)
	log.Println(results)
}
