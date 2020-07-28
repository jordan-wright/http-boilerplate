package repositories

type SQLCalculatedMatch struct {
	ID           int64   `db:"id"`
	Time         string  `db:"timestamp"`
	RedScore     int64   `db:"red_score"`
	BlueScore    int64   `db:"blue_score"`
	RedAvg       float32 `db:"red_avg"`
	BlueAvg      float32 `db:"blue_avg"`
	RatingChange float32 `db:"rating_change"`
}

func (u *SQLCalculatedMatch) TableName() string {
	return "match_calculated"
}

/*
create table match_calculated
(
	id int not null,
	time timestamp null,
	red_score int null,
	blue_score int null,
	rating_change float null
);

create unique index match_calculated_id_uindex
	on match_calculated (id);

alter table match_calculated
	add constraint match_calculated_pk
		primary key (id);

*/
