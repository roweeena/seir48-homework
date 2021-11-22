CREATE TABLE motherboards (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  model TEXT,
  socket TEXT,
  image TEXT,
  video TEXT
);

INSERT INTO motherboards (name, model, socket) VALUES ('Asus','GAMING Z590-PLUS', 'Intel LGA 1200 ');
INSERT INTO motherboards (name, model, socket) VALUES ('ASRock','Z590 PG Velocita WiFi 6E','Intel LGA 1200 ');
