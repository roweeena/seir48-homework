CREATE TABLE pets (
    id INTEGER PRIMARY KEY,
    petName TEXT,
    breed TEXT,
    age INTEGER,
    dead BOOLEAN
);

-- Optional Seed Data
-- Allows you to enter the data in as you like
INSERT INTO pets (id, petName, breed, age, dead) VALUES (1, "Fluffy", "unicorn", 1000, 0);

-- Assumes inputted values are all in order 
INSERT INTO pets VALUES (2, 'Gigantor', 'Robot', 1, 1);