CREATE TABLE foods (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  cuisine TEXT,
  image TEXT
);

-- seed data
INSERT INTO foods (name, cuisine) VALUES ('spaghetti', 'italian');
INSERT INTO foods (name, cuisine) VALUES ('kimchi', 'korean');
