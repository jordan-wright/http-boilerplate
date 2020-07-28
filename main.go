package main

import (
	"fmt"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"./src/controllers"
	"./src/models"
	"./src/repositories"
	"github.com/rushteam/gosql"
)

var startingRating float32 = 1000.0

//DBEngine is just what you think it is
var DBEngine *gosql.PoolCluster = controllers.InitializeDB()

func regenerateData(w http.ResponseWriter, r *http.Request) {
	filepath.Walk(controllers.ParsedReplayFolder, func(path string, info os.FileInfo, err error) error {
		if info.IsDir() {
			return nil
		}
		if filepath.Ext(path) == ".json" {
			match := controllers.ReadMatchFromFile(path)
			match.InsertIntoDB(DBEngine)
		}
		return nil
	})
	// TODO: calculate everything from unparsed replays

}

func parseReplay(w http.ResponseWriter, r *http.Request) {
	startTime := time.Now()
	matchId := controllers.ProcessReplay(r)

	match := models.GetMatchByID(matchId)

	outputMessage := controllers.ExportHTML(*match)
	t := time.Now()
	fmt.Fprintf(w, outputMessage+"\n"+(t.Sub(startTime).String()))
}

func main() {
	repositories.DBEngine = controllers.InitializeDB()
	http.HandleFunc("/", HelloServer)
	http.HandleFunc("/regenerate", regenerateData)
	http.HandleFunc("/p", parseReplay)
	http.ListenAndServe(":7777", nil)
}

//HelloServer - testing function
func HelloServer(w http.ResponseWriter, r *http.Request) {
	controllers.InitializeDB()
	outputMessage := "<html><head><meta name=\"description\" content=\"" + "123456" + "\"></head><body>" + "456789" + "</body></html>"

	fmt.Fprintf(w, outputMessage)
}
