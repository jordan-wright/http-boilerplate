package controllers

import (
	"strconv"

	"../models"
)

// ExportHTML creates html code for unfurling and basic shows. Will be redirecting to React app in future
func ExportHTML(cm models.CalculatedMatch) string {
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
	outputMeta += " has won! (" + strconv.Itoa(int(cm.RedTeam.Score)) + ":" + strconv.Itoa(int(cm.BlueTeam.Score)) + ")"
	metaTag := "<meta name=\"description\" content=\"" + outputMeta + "\">"
	metaOgDescription := "<meta property=\"og:description\" content=\"" + outputMeta + "\">"
	metaOgTitle := "<meta property=\"og:title\" content=\"Match results!\">"
	metaOgType := "<meta property=\"og:type\" content=\"article\">"
	metaOgLocale := "<meta property=\"og:locale\" content=\"en_US\">"
	metaOgAggregator := metaOgTitle + metaOgDescription + metaOgType + metaOgLocale
	outputMessage := "<html><head>" + metaTag + metaOgAggregator + "</head><body><pre>" + outputMeta + "</pre></body></html>"
	return outputMessage
}
