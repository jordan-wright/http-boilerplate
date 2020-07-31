package repositories

// SQLPlayerMatch ..
type SQLPlayerMatch struct {
	PlayerID int64 `db:"player_id"`
	MatchID  int64 `db:"match_id"`
}

// TableName .
func (u *SQLPlayerMatch) TableName() string {
	return "player_match"
}

/*
create table player_match
(
	player_id int null,
	match_id int null
);
*/
