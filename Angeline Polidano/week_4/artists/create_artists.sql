
CREATE TABLE artists (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
genre TEXT,
image TEXT -- URL

);

-- seed data

INSERT INTO artists (name, genre) VALUES ('Radiohead', 'Alternative Rock');
INSERT INTO artists (name, genre) VALUES ('Matt Corby', 'Alternative Soul');
