package models

import (
	"../repositories"
)

// Team .
type Team struct {
	Players       []PlayerSnapshot
	AvgTeamRating float32
	Score         int64
	RatingChange  float32
}

//CalculatedMatch - match filled with full match and player data
type CalculatedMatch struct {
	ID           int64
	Time         string
	RedTeam      Team
	BlueTeam     Team
	RawPositions string
}

//InsertToDB .
func (cm *CalculatedMatch) InsertToDB() int64 {
	match := &repositories.SQLCalculatedMatch{
		Time:         cm.Time,
		RedScore:     cm.RedTeam.Score,
		BlueScore:    cm.BlueTeam.Score,
		RedAvg:       cm.RedTeam.AvgTeamRating,
		BlueAvg:      cm.BlueTeam.AvgTeamRating,
		RatingChange: cm.RedTeam.RatingChange,
		RawPositions: cm.RawPositions,
	}

	repositories.DBEngine.Save(match)
	return match.ID
}

// GetMatchByID .
func GetMatchByID(id int64) *CalculatedMatch {
	SQLObject := &repositories.SQLCalculatedMatch{}
	err := repositories.DBEngine.First(SQLObject, "id = ?", id)

	if err.Error != nil {
		return nil
	}

	var playersSnaps []PlayerSnapshot
	repositories.DBEngine.Find(&playersSnaps, "match_id = ?", id)
	var redPlayers []PlayerSnapshot
	var bluePlayers []PlayerSnapshot
	for _, playerSnap := range playersSnaps {
		if playerSnap.IsRed {
			redPlayers = append(redPlayers, playerSnap)
		} else {
			bluePlayers = append(bluePlayers, playerSnap)
		}
	}

	resultObject := &CalculatedMatch{
		ID:   id,
		Time: SQLObject.Time,
		RedTeam: Team{
			Players:       redPlayers,
			AvgTeamRating: SQLObject.RedAvg,
			Score:         SQLObject.RedScore,
			RatingChange:  SQLObject.RatingChange,
		},
		BlueTeam: Team{
			Players:       bluePlayers,
			AvgTeamRating: SQLObject.BlueAvg,
			Score:         SQLObject.BlueScore,
			RatingChange:  -SQLObject.RatingChange,
		},
		RawPositions: SQLObject.RawPositions,
	}

	return resultObject
}

// CheckForDuplicatePositions .
func CheckForDuplicatePositions(positions string) int64 {
	SQLObject := &repositories.SQLCalculatedMatch{}
	err := repositories.DBEngine.First(SQLObject, "raw_positions = ?", positions)

	if err.Error != nil {
		return 0
	}
	return SQLObject.ID
}

/*
type SQLPlayerHistory struct {
	ID       int64   `db:"uid,pk"`
	MatchID  int64   `db:"match_id"`
	PlayerID int64   `db:"player_id"`
	Time     int64   `db:"timestamp"`
	Rating   float32 `db:"rating"`
	IsRed    bool    `db:"is_red"`
}
*/
