CREATE TABLE songs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT,
  thumbs_up INTEGER
);

INSERT INTO songs (name, thumbs_up) VALUES ("Moves Like Jagger", 1);
INSERT INTO songs (name, thumbs_up) VALUES ("Animals", 0);
