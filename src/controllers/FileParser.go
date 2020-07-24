package controllers

import (
	"encoding/json"
	"io/ioutil"
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

	nodeCoverterPath := "haxball-parser/haxball/replay.js"
	targetPath := "haxball-parser/preprocessed/" + replayName + ".bin"

	cmd := exec.Command("node", nodeCoverterPath, "convert", filepath, targetPath)
	_, err := cmd.Output()
	tools.Check(err)

	cmd = exec.Command("python3", "test.py")
	cmd.Dir = "haxball-parser"
	_, err = cmd.Output()
	tools.Check(err)

}

// ReadMatchFromFile takes converted file and creates RawMatch object from it
func ReadMatchFromFile(replayName string) models.RawMatch {
	byteValue, err := ioutil.ReadFile(ParsedReplayFolder + replayName + ".bin.json")
	tools.Check(err)

	var match models.RawMatch
	json.Unmarshal(byteValue, &match)

	return match
}
