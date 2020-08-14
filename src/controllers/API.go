package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"../models"
	"../tools"
)

func prepareData(data interface{}, w http.ResponseWriter, r *http.Request) string {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	outputMessage, err := json.Marshal(&data)
	tools.Check(err)
	return string(outputMessage)
}

// GetLastMatches ..
func GetLastMatches(w http.ResponseWriter, r *http.Request) {
	outputMessage := prepareData(models.GetLastMatches(5), w, r)
	fmt.Fprintf(w, outputMessage)
}

// GetPlayersTable ..
func GetPlayersTable(w http.ResponseWriter, r *http.Request) {
	outputMessage := prepareData(models.GetPlayersTable(), w, r)
	fmt.Fprintf(w, outputMessage)
}
