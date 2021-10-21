CREATE TABLE rodents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT,
    family TEXT,
    lifespan INTEGER,
    diet TEXT
);

-- don't seed in your rails SQL, use seeds.rb