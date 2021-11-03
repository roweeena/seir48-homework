CREATE TABLE albums (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
artist_id INTEGER,
year INTEGER,
image TEXT, -- URL
streaming_link TEXT -- URL
);

-- seed data

INSERT INTO albums (name, year) VALUES ('In Rainbows', 2007);
INSERT INTO albums (name, year) VALUES ('Rainbow Valley', 2018);
