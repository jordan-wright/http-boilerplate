package repositories

type SQLRawMatch struct {
	ID                int    `db:"uid,pk"`
	Time              string `db:"time"`
	RawPositionsAtEnd string `db:"positions"`
	RedScore          int    `db:"red_score"`
	BlueScore         int    `db:"blue_score"`
	RedPlayers        string `db:"red_players"`
	BluePlayers       string `db:"blue_players"`
}

func (u *SQLRawMatch) TableName() string {
	return "raw_match"
}

/*
create table raw_match
(
	id int unique,
	time timestamp null,
	positions varchar(300) null,
	red_score int null,
	blue_score int null,
	red_players varchar(300) null,
	blue_players varchar(300) null,
	constraint raw_match_pk
		primary key (id)
);
*/
