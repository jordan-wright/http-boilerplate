package controllers

import (
	"net/http"

	"../repositories"
)

func ProcessReplay(request *http.Request) int64 {
	downloadPath := ExtractURL(request)

	urlToCheck := repositories.SQLDownloadedUrl{URL: downloadPath}
	id := urlToCheck.DoesExistsInDB()
	if id != 0 {
		return id
	}
	replayName := DownloadReplay(downloadPath)
	id = processReplayFromFile(replayName)

	urlToCheck.MatchID = id
	urlToCheck.InsertIntoDB()

	return id

}

func processReplayFromFile(replayName string) int64 {

	rawMatch := ReadMatchFromFile(replayName)

	calculatedMatch := calculateMatch(rawMatch)

	return calculatedMatch.ID
}
