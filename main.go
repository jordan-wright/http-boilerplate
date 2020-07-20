package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

type Player struct {
	Name   string
	Wins   int
	Losses int
	Ratio  float32
}

type Match struct {
	Time  string
	Teams struct {
		Red  []string
		Blue []string
	}
	Score struct {
		Red  int
		Blue int
	}
}

func readAll(w http.ResponseWriter, r *http.Request) {
	var files []string

	root := "replayData/"
	err := filepath.Walk(root, func(path string, info os.FileInfo, err error) error {
		if !info.IsDir() {
			files = append(files, path)
		}
		return nil
	})
	check(err)

	var players = make(map[string]*Player)

	for _, file := range files {
		byteValue, err := ioutil.ReadFile(file)
		check(err)

		var match Match
		json.Unmarshal(byteValue, &match)

		for _, player := range append(match.Teams.Blue, match.Teams.Red...) {
			if _, ok := players[player]; !ok {
				var newPlayer Player
				newPlayer.Name = player
				newPlayer.Wins = 0
				newPlayer.Losses = 0
				newPlayer.Ratio = 0
				players[player] = &newPlayer
			}
		}

		if match.Score.Blue > match.Score.Red {
			for _, playerName := range match.Teams.Blue {
				players[playerName].Wins = players[playerName].Wins + 1
			}

			for _, playerName := range match.Teams.Red {
				players[playerName].Losses = players[playerName].Losses + 1
			}

		} else if match.Score.Blue < match.Score.Red {

			for _, playerName := range match.Teams.Red {
				players[playerName].Wins = players[playerName].Wins + 1
			}

			for _, playerName := range match.Teams.Blue {
				players[playerName].Losses = players[playerName].Losses + 1
			}
		}
	}

	for _, player := range players {
		player.Ratio = float32(player.Wins) / float32(player.Losses)
	}

	var resultData, _ = json.Marshal(players)
	fmt.Fprintf(w, string(resultData))
}

func main() {
	http.HandleFunc("/", HelloServer)
	http.HandleFunc("/readAll", readAll)
	http.ListenAndServe(":8080", nil)
}

func HelloServer(w http.ResponseWriter, r *http.Request) {
	var a = 1
	a = a + a
	fmt.Fprintf(w, "Hello, %s!"+strconv.Itoa(a), r.URL.Path[1:])
}
