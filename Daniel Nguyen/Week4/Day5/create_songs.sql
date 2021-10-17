CREATE TABLE songs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  artist TEXT,
  album TEXT,
  year INTEGER,
  length INTEGER,
  url TEXT
);

INSERT INTO songs (title, artist, album, year, length) VALUES ('Come Together', 'The Beatles', 'Abbey Road', 1969, 259);
INSERT INTO songs (title, artist, album, year, length) VALUES ('Levitating', 'Dua Lipa', 'Future Nostalgia', 2020, 203);
