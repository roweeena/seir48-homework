CREATE TABLE whiskies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  distillery TEXT,
  name TEXT,
  abv REAL,
  image TEXT
);

CREATE TABLE distilleries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  location TEXT,
  logo TEXT
);

-- SEED DATA

INSERT INTO whiskies (distillery, name, abv) VALUES ('Starward', 'Nova', 41.0);
INSERT INTO whiskies (distillery, name, abv) VALUES ('The Gospel', 'Straight Rye', 45.0);

INSERT INTO distilleries (name, location) VALUES ('Starward', 'Melbourne, Australia');
INSERT INTO distilleries (name, location) VALUES ('The Gospel', 'Melbourne, Australia');
INSERT INTO distilleries (name, location) VALUES ('Laphroaig', 'Islay, Scotland');
