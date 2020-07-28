package controllers

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"os/exec"

	"../models"
	"../tools"
)

//UnparsedReplayFolder comment
const UnparsedReplayFolder = "files/unparsedReplays/"

// ParsedReplayFolder comment
const ParsedReplayFolder = "files/replayData/"

// ParseReplay takes unparsed data and executes node converter to bin and then pythons exctractor of important data
func ParseReplay(replayName string) {
	filepath := UnparsedReplayFolder + replayName

	nodeCoverterPath := "hb-parser/haxball/replay.js"
	targetPath := "hb-parser/preprocessed/" + replayName + ".bin"

	cmd := exec.Command("node", nodeCoverterPath, "convert", filepath, targetPath)
	_, err := cmd.Output()
	tools.Check(err)

	cmd = exec.Command("python3", "test.py")
	cmd.Dir = "hb-parser"
	_, err = cmd.Output()
	tools.Check(err)
	log.Println(replayName + " parsed")
}

// ReadMatchFromFile takes converted file and creates RawMatch object from it
func ReadMatchFromFile(replayName string) models.RawMatch {
	suffix := ".bin.json"
	filepath := ParsedReplayFolder + replayName + suffix
	byteValue, err := ioutil.ReadFile(filepath)
	tools.Check(err)

	var match models.RawMatch
	json.Unmarshal(byteValue, &match)

	return match
}
