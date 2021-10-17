CREATE TABLE works (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    artist TEXT,
    medium TEXT,
    image TEXT
);

-- seed data
INSERT INTO works (title, artist, medium) VALUES ('Hayfield', 'C. Conder', 'Oil on board');
INSERT INTO works (title, artist, medium) VALUES ('Vetheuil', 'C. Conder', 'Oil on canvas');
