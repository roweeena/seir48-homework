CREATE TABLE players (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  position TEXT,
  club_id INTEGER,
  club TEXT,
  owner_id INTEGER,
  owner TEXT,
  games INTEGER,
  average FLOAT,
  scores TEXT
);
