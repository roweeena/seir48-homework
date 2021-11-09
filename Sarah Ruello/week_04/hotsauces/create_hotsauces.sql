-- SQL comments

CREATE TABLE hotsauces (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    pepper TEXT,
    spice_level INTEGER,
    image TEXT
);

INSERT INTO hotsauces (name, pepper, spice_level) VALUES ('Red Clipper', 'Jalapeno', 2);
INSERT INTO hotsauces (name, pepper, spice_level) VALUES ('Torchbearer Zombie Apolcalypse', 'Ghost Pepper', 5);


