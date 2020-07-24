package models

// Player - person who plays
type Player struct {
	ID          int
	Name        string
	Wins        int
	Losses      int
	GoalsScored int
	GoalsLost   int
	WinRate     float32
	Rating      float32
	Matches     []RawMatch
}
