CREATE TABLE mountains (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  location TEXT,
  height INTEGER,
  image TEXT
);


-- Seed data

INSERT INTO mountains (name, location, height) VALUES ("Aconcagua", "Argentina", 6961);
INSERT INTO mountains (name, location, height) VALUES ("Kilimanjaro", "Tanzania", 5895);
