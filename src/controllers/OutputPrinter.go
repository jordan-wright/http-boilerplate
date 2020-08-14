package controllers

import (
	"encoding/json"
	"fmt"
	"strconv"

	"../models"
	"../tools"
)

// ExportHTML creates html code for unfurling and basic shows. Will be redirecting to React app in future
func ExportHTML(cm models.CalculatedMatch) string {
	outputJSON, err := json.MarshalIndent(cm, "", "  ")
	tools.Check(err)
	outputMeta := "\n>>>Red<<<"
	for _, player := range cm.RedTeam.Players {
		outputMeta += " - " + player.PlayerName
	}
	outputMeta += "\n>>>Blue<<<"
	for _, player := range cm.BlueTeam.Players {
		outputMeta += " - " + player.PlayerName
	}
	if cm.RedTeam.Score > cm.BlueTeam.Score {
		outputMeta += "\nRed"
	} else {
		outputMeta += "\nBlue"
	}
	outputMeta += " has won! (" + strconv.Itoa(int(cm.RedTeam.Score)) + ":" + strconv.Itoa(int(cm.BlueTeam.Score)) + ")\n"
	outputMeta += "Rating change - Red: " + fmt.Sprintf("%.2f", cm.RedTeam.RatingChange) + ", Blue: " + fmt.Sprintf("%.2f", cm.BlueTeam.RatingChange)
	metaTag := "<meta name=\"description\" content=\"" + outputMeta + "\">"
	metaOgDescription := "<meta property=\"og:description\" content=\"" + outputMeta + "\">"
	metaOgTitle := "<meta property=\"og:title\" content=\"Match results!\">"
	metaOgType := "<meta property=\"og:type\" content=\"article\">"
	metaOgLocale := "<meta property=\"og:locale\" content=\"en_US\">"
	metaOgAggregator := metaOgTitle + metaOgDescription + metaOgType + metaOgLocale
	redirectionScript := "<script type=\"text/javascript\">window.location.replace(\"https://purely-imaginary.github.io/\");</script>"
	outputMessage := "<html><head>" + metaTag + metaOgAggregator + "</head><body><pre>" + outputMeta + "\n\n" + string(outputJSON) + "</pre>" + redirectionScript + "</body></html>"
	return outputMessage
}
