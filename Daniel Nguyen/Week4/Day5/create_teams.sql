CREATE TABLE teams (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  wins INTEGER,
  draws INTEGER,
  losses INTEGER,
  byes INTEGER,
  points_for INTEGER,
  points_against INTEGER
);

INSERT INTO teams (name) VALUES ('The Here If You Needs');
