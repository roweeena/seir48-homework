-- SQL comments

CREATE TABLE beers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    brand TEXT,
    style_id INTEGER,
    abv TEXT,
    country TEXT,
    image TEXT
);

INSERT INTO beers (name, brand, style_id, abv, country) VALUES ('Hazy Pale', 'Philter', 1, '5.3%', 'Australia');
INSERT INTO beers (name, brand, style_id, abv, country) VALUES ('Coffee Milk Stout', 'Batch', 2, '4.4%', 'Australia');


