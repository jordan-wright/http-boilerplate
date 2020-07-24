package models

// RawMatch - data parsed from replay
type RawMatch struct {
	Time              string
	RawPositionsAtEnd string
	Teams             struct {
		Red  []string
		Blue []string
	}
	Score struct {
		Red  int
		Blue int
	}
}
