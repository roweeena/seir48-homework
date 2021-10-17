CREATE TABLE climbers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  surname TEXT,
  nationality TEXT
);

-- Seed data

INSERT INTO climbers (name, surname, nationality) VALUES ("Reinhold Andreas", "Messner", "Italian");
INSERT INTO climbers (name, surname, nationality) VALUES ("Gerlinde", "Kaltenbrunner", "Austrian");
