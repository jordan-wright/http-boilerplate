package models

//CalculatedMatch - match filled with full match and player data
type CalculatedMatch struct {
	Time  int
	Teams struct {
		Red struct {
			Players       []Player
			AvgTeamRating float32
			Score         int
			RatingChange  float32
		}
		Blue struct {
			Players       []Player
			AvgTeamRating float32
			Score         int
			RatingChange  float32
		}
	}
}

type TestStruct struct {
	id          int
	Name        string
	Wins        int
	Losses      int
	GoalsScored int
	GoalsLost   int
	WinRate     float32
	Rating      float32
	Matches     []RawMatch
}
