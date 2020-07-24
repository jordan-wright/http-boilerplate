package controllers

import (
	"strconv"

	"../models"
)

// ExportHTML creates html code for unfurling and basic shows. Will be redirecting to React app in future
func ExportHTML(rawMatch models.RawMatch) string {
	outputMeta := "\n>>>Red<<<"
	for _, player := range rawMatch.Teams.Red {
		outputMeta += " - " + player
	}
	outputMeta += "\n>>>Blue<<<"
	for _, player := range rawMatch.Teams.Blue {
		outputMeta += " - " + player
	}
	if rawMatch.Score.Red > rawMatch.Score.Blue {
		outputMeta += "\nRed"
	} else {
		outputMeta += "\nBlue"
	}
	outputMeta += " has won! (" + strconv.Itoa(rawMatch.Score.Red) + ":" + strconv.Itoa(rawMatch.Score.Blue) + ")"
	metaTag := "<meta name=\"description\" content=\"" + outputMeta + "\">"
	metaOgDescription := "<meta property=\"og:description\" content=\"" + outputMeta + "\">"
	metaOgTitle := "<meta property=\"og:title\" content=\"Match results!\">"
	metaOgType := "<meta property=\"og:type\" content=\"article\">"
	metaOgLocale := "<meta property=\"og:locale\" content=\"en_US\">"
	metaOgAggregator := metaOgTitle + metaOgDescription + metaOgType + metaOgLocale
	outputMessage := "<html><head>" + metaTag + metaOgAggregator + "</head><body><pre>" + outputMeta + "</pre></body></html>"
	return outputMessage
}
