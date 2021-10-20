

CREATE TABLE albums (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	title TEXT,
	artist TEXT,
	year INTEGER,
	label TEXT,
	image TEXT -- url to a photo of the album cover
);



--- seed data

INSERT INTO albums (title, artist) VALUES('Roar', 'Katty Perry');
INSERT INTO albums (title, artist) VALUES('Hello', 'Adele');
