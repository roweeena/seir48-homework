CREATE TABLE further_information (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  breed TEXT,
  origin TEXT,
  coat_length TEXT
);


-- seed data
INSERT INTO further_information (breed, origin, coat_length) VALUES ('abyssinian', 'ethiopia', 'short');
INSERT INTO further_information (breed, origin, coat_length) VALUES ('aegean', 'greece', 'semi-long');
