CREATE TABLE movies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  year INTEGER,
  img TEXT
);

-- seed
INSERT INTO movies (name, year) VALUES ('Parasite', '2019');
INSERT INTO movies (name, year) VALUES ('Singing In The Rain', '1952');
