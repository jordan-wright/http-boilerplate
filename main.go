package main

import (
	"fmt"
	"net/http"

	"./src/controllers"
)

var startingRating float32 = 1000.0

//DBEngine is just what you think it is
// var DBEngine *xorm.Engine

func regenerateData(w http.ResponseWriter, r *http.Request) {
	// TODO: calculate everything from unparsed replays

}

func parseReplay(w http.ResponseWriter, r *http.Request) {
	downloadPath := controllers.ExtractURL(r)
	replayName := controllers.DownloadReplay(downloadPath)
	controllers.ParseReplay(replayName)
	match := controllers.ReadMatchFromFile(replayName)

	outputMessage := controllers.ExportHTML(match)

	fmt.Fprintf(w, outputMessage)
	// if !matchExists {
	// calculateMatch(match)
	// }
}

func main() {
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
