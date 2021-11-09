CREATE TABLE countries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  population INTEGER,
  language TEXT,
  flag TEXT
);

-- Seed data base (countries)

INSERT INTO countries (name, population, language) VALUES ("Australia", "25690000", "English");
INSERT INTO countries (name, population, language) VALUES ("Argentina", "45.380.000", "Spanish");
