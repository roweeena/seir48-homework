CREATE TABLE guitars (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brand TEXT,
  model TEXT,
  year INTEGER -- url for a photo of a guitar
);
-- seed data
INSERT INTO guitars (id, brand, model, year) VALUES (1, 'Gibson', '330', 1967);
INSERT INTO guitars (id, brand, model, year) VALUES (2, 'Fender', 'Telecaster', 2008);
INSERT INTO guitars (id, brand, model, year) VALUES (3, 'Martin', 'Auditorium', 1973);
