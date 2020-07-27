package repositories

type SQLPlayerMatch struct {
	PlayerID int `db:"player_id"`
	MatchID  int `db:"match_id"`
}

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
