package controllers

import (
	"io"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"

	"../tools"
)

// DownloadReplay takes path and downloads file to app for further processing
func DownloadReplay(path string) string {
	resp, err := http.Get(path)
	tools.Check(err)
	defer resp.Body.Close()
	contentDispositionHeaderSplitted := strings.Split(resp.Header["Content-Disposition"][0], "=")
	// timestamp := strconv.Itoa(int(time.Now().Unix()))
	replayName := contentDispositionHeaderSplitted[len(contentDispositionHeaderSplitted)-1]
	// replayName = strings.TrimLeft((strings.Split(replayName, ".")[0] + "-" + timestamp + "." + strings.Split(replayName, ".")[1]), "HBReplay-")
	filepath := UnparsedReplayFolder + replayName
	out2, err := os.Create(filepath)
	defer out2.Close()

	n, err := io.Copy(out2, resp.Body)
	tools.Check(err)

	log.Println("Saved " + strconv.Itoa(int(n)) + " bytes")

	return replayName
}

// ExtractURL takes request object and extracts filepath to replay file to download
func ExtractURL(r *http.Request) (url string) {
	keys, ok := r.URL.Query()["u"]

	if !ok || len(keys[0]) < 1 {
		log.Println("Url Param 'u' is missing")
		return
	}

	return keys[0]
}
