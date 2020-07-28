package models

import (
	"../repositories"
	"../tools"
	"github.com/rushteam/gosql"
)

type Team struct {
	Players       []PlayerSnapshot
	AvgTeamRating float32
	Score         int64
	RatingChange  float32
}

//CalculatedMatch - match filled with full match and player data
type CalculatedMatch struct {
	ID       int64
	Time     string
	RedTeam  Team
	BlueTeam Team
}

func (cm *CalculatedMatch) InsertToDB() int64 {
	match := &repositories.SQLCalculatedMatch{
		Time:         cm.Time,
		RedScore:     cm.RedTeam.Score,
		BlueScore:    cm.BlueTeam.Score,
		RedAvg:       cm.RedTeam.AvgTeamRating,
		BlueAvg:      cm.BlueTeam.AvgTeamRating,
		RatingChange: cm.RedTeam.RatingChange,
	}

	res, err := repositories.DBEngine.Insert(match)
	tools.Check(err)

	matchID, _ := res.LastInsertId()
	// for _, player := range append(cm.RedTeam.Players, cm.BlueTeam.Players...) {
	// 	playerHistory := &PlayerSnapshot{
	// 		MatchID:  matchID,
	// 		PlayerID: player.ID,
	// 		Rating:   player.Rating,
	// 	}
	// 	repositories.DBEngine.Insert(playerHistory)
	// }
	return matchID
}

func GetMatchByID(id int64) *CalculatedMatch {
	SQLObject := &repositories.SQLCalculatedMatch{}
	err := repositories.DBEngine.Fetch(SQLObject,
		gosql.Where("id", id))

	if err != nil && err.Error() == "sql: no rows in result set" {
		return nil
	}

	var redPlayers []PlayerSnapshot
	err = repositories.DBEngine.FetchAll(&redPlayers,
		gosql.Where("match_id", id),
		gosql.Where("is_red", true))
	var bluePlayers []PlayerSnapshot
	err = repositories.DBEngine.FetchAll(&bluePlayers,
		gosql.Where("match_id", id),
		gosql.Where("is_red", false))

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
	}
	tools.Check(err)

	return resultObject
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
