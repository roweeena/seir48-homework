CREATE TABLE songs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT,
  thumbs_up INTEGER,
  album TEXT
);

INSERT INTO songs (name, thumbs_up, album) VALUES ("Moves Like Jagger", 1, "Hands All Over");
INSERT INTO songs (name, thumbs_up, album) VALUES ("Animals", 0, "V");
