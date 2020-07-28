package repositories

import (
	"../tools"
	"github.com/rushteam/gosql"
)

type SQLDownloadedUrl struct {
	URL     string `db:"url"`
	MatchID int64  `db:"match_id"`
}

func (u *SQLDownloadedUrl) TableName() string {
	return "downloaded_url"
}

func (u *SQLDownloadedUrl) DoesExistsInDB() int64 {
	url := &SQLDownloadedUrl{}
	err := DBEngine.Fetch(url,
		gosql.Where("url", u.URL))
	if err != nil && err.Error() == "sql: no rows in result set" {
		return 0
	}
	tools.Check(err)
	return url.MatchID
}

func (u *SQLDownloadedUrl) InsertIntoDB() {
	_, err := DBEngine.Insert(u)
	tools.Check(err)
}

/*
create table player_match
(
	player_id int null,
	match_id int null
);
*/
