CREATE TABLE artists (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  genres TEXT,
  image TEXT
);

INSERT INTO artists (name, genres, image) VALUES ('The Beatles', 'Rock', 'https://upload.wikimedia.org/wikipedia/commons/d/df/The_Fabs.JPG');
INSERT INTO artists (name, genres, image) VALUES ('Dua Lipa', 'Pop', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Dua_Lipa_with_Warner_Music.jpg/440px-Dua_Lipa_with_Warner_Music.jpg');
