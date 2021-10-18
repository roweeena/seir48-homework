CREATE TABLE films (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  director TEXT,
  description TEXT,
  year INTEGER,
  rating REAL
);

-- seed data
INSERT INTO films (title, director, year, rating) VALUES ('Mank', 'David Fincher', 2020, 3);
INSERT INTO films (title, director, year, rating) VALUES ('Nomadland', 'Chloe Zhou', 2020, 3.5);
