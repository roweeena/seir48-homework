CREATE TABLE albums (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT,
  thumbs_up INTEGER
);

INSERT INTO albums (name, thumbs_up) VALUES ("IT WON’T BE SOON BEFORE LONG", 1);
INSERT INTO albums (name, thumbs_up) VALUES ("SONGS ABOUT JANE", 0);
