package repositories

type SQLPlayer struct {
	ID          int     `db:"uid,pk"`
	Name        string  `db:"name"`
	Wins        int     `db:"wins"`
	Losses      int     `db:"losses"`
	GoalsScored int     `db:"gwon"`
	GoalsLost   int     `db:"glost"`
	WinRate     float32 `db:"winrate"`
	Rating      float32 `db:"current_rating"`
}

func (u *SQLPlayer) TableName() string {
	return "player"
}

/*
create table player
(
	id int not null,
	name varchar(50) null,
	wins int null,
	losses int null,
	gwon int null,
	glost int null,
	winrate int null,
	current_rating float null
);

create unique index player_id_uindex
	on player (id);

alter table player
	add constraint player_pk
		primary key (id);

*/
