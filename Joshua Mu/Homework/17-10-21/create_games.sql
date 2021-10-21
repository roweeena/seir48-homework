CREATE TABLE games {
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT,
    rating INTEGER(2),
    creators TEXT
};

INSERT INTO games (name, description, rating) VALUES ("Dota 2", "A MOBA created by Valve faithfully based on the Warcraft 3 mod called 'DOTA'", 6);
INSERT INTO games (name, description, rating) VALUES ("League of Legends", "Another MOBA based on the Warcraft 3 mod called 'DOTA'. Though the creators of this game decided to direct it in a different direction, compared to the original.", 6);
INSERT INTO games (name, description, rating) VALUES ("SMITE", "A MOBA", 2);


