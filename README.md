## mysql CREATE TABLE script:

```mysql

create schema referee collate latin1_swedish_ci;

create table downloaded_url
(
	url varchar(300) null,
	match_id int null
);

create table match_calculated
(
	id int auto_increment,
	timestamp timestamp null,
	red_score int null,
	blue_score int null,
	red_avg float null,
	blue_avg float null,
	rating_change float null,
	constraint match_calculated_id_uindex
		unique (id)
);

alter table match_calculated
	add primary key (id);

create table player
(
	id int auto_increment,
	name varchar(50) null,
	wins int null,
	losses int null,
	gwon int null,
	glost int null,
	winrate int null,
	current_rating float null,
	constraint player_id_uindex
		unique (id)
);

alter table player
	add primary key (id);

create table player_snapshot
(
	id int auto_increment,
	player_id int null,
	player_name varchar(300) null,
	match_id int null,
	rating float null,
	is_red tinyint(1) null,
	constraint player_history_id_uindex
		unique (id)
);

alter table player_snapshot
	add primary key (id);

create table raw_match
(
	id int auto_increment,
	time timestamp null,
	positions varchar(300) null,
	red_score int null,
	blue_score int null,
	red_players varchar(300) null,
	blue_players varchar(300) null,
	constraint raw_match_id_uindex
		unique (id)
);

alter table raw_match
	add primary key (id);


```
