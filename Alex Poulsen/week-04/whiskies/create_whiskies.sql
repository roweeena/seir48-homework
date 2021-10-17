CREATE TABLE whiskies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  distillery TEXT,
  name TEXT,
  location TEXT,
  abv REAL,
  image TEXT
);

-- Seed Data

INSERT INTO whiskies (distillery, name, location, abv) VALUES ('Starward', 'Nova', 'Melbourne, Australia', 41.0);
INSERT INTO whiskies (distillery, name, location, abv) VALUES ('The Gospel', 'Straight Rye', 'Melbourne, Australia', 45.0);
