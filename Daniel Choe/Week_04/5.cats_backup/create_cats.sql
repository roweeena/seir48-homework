CREATE TABLE cats (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  breed TEXT,
  coat_pattern TEXT,
  image TEXT
);


-- seed data
INSERT INTO cats (breed, coat_pattern, image) VALUES ('abyssinian', 'agouti', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Gustav_chocolate.jpg/839px-Gustav_chocolate.jpg');
INSERT INTO cats (breed, coat_pattern, image) VALUES ('aegean', 'multi-color', 'https://upload.wikimedia.org/wikipedia/commons/5/51/Aegean_cat.jpg');
