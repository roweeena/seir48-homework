CREATE TABLE teams (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT,
	manager TEXT,
	city TEXT,
	logo TEXT
);

INSERT INTO teams (name, manager, city, logo) VALUES ('Liverpool', 'Jurgen Klopp', 'Liverpool', 'Coming Soon');
INSERT INTO teams (name, manager, city, logo) VALUES ('Crystal Palace', 'Patrick Vieira', 'London', 'Coming Soon');
INSERT INTO teams (name, manager, city, logo) VALUES ('Arsenal', 'Mikel Arteta', 'London', 'Coming Soon');