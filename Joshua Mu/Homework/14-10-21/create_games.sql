CREATE TABLE games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT,
    rating INTEGER
);

INSERT INTO games (name, description, rating) VALUES ("DOTA 2", "A MOBA", 6);
INSERT INTO games (name, description, rating) VALUES ("LOL", "A MOBA", 6);
INSERT INTO games (name, description, rating) VALUES ("SMITE", "A MOBA", 2);
INSERT INTO games (name, description, rating) VALUES ("ETERNAL RETURN", "A MOBA", 5);

