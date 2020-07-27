package main

import (
	"fmt"
	"net/http"
	"os"
	"path/filepath"

	"./src/controllers"
	"github.com/rushteam/gosql"
)

var startingRating float32 = 1000.0

//DBEngine is just what you think it is
var DBEngine *gosql.PoolCluster

func regenerateData(w http.ResponseWriter, r *http.Request) {
	counter := 1
	filepath.Walk(controllers.ParsedReplayFolder, func(path string, info os.FileInfo, err error) error {
		if info.IsDir() {
			return nil
		}
		if filepath.Ext(path) == ".json" {
			match := controllers.ReadMatchFromFile(path, false)
			match.InsertIntoDB(DBEngine, counter)
			counter++
		}
		return nil
	})
	// TODO: calculate everything from unparsed replays

}

func parseReplay(w http.ResponseWriter, r *http.Request) {
	downloadPath := controllers.ExtractURL(r)
	replayName := controllers.DownloadReplay(downloadPath)
	controllers.ParseReplay(replayName)
	match := controllers.ReadMatchFromFile(replayName, true)

	outputMessage := controllers.ExportHTML(match)

	fmt.Fprintf(w, outputMessage)
	// if !matchExists {
	// calculateMatch(match)
	// }
}

func main() {
	DBEngine = controllers.InitializeDB()
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
