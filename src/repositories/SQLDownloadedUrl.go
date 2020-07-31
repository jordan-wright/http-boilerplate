package repositories

import "github.com/jinzhu/gorm"

// SQLDownloadedURL .
type SQLDownloadedURL struct {
	URL     string `db:"url"`
	MatchID int64  `db:"match_id"`
}

// TableName .
func (u *SQLDownloadedURL) TableName() string {
	return "downloaded_url"
}

// DoesExistsInDB .
func (u *SQLDownloadedURL) DoesExistsInDB() int64 {
	url := &SQLDownloadedURL{}
	err := DBEngine.First(url, "url = ?", u.URL)

	if gorm.IsRecordNotFoundError(err.Error) {
		return 0
	}

	return url.MatchID
}

// InsertIntoDB .
func (u *SQLDownloadedURL) InsertIntoDB() {
	DBEngine.Save(u)
}

/*
create table player_match
(
	player_id int null,
	match_id int null
);
*/
