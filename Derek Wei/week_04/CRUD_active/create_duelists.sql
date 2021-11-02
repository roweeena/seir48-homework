CREATE TABLE duelists (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  age INTEGER,
  gender CHAR(1),
  image TEXT
);

INSERT INTO duelists (name, age, gender, image) VALUES ('Yugi Muto', 18, 'M', 'https://uploads3.yugioh.com/character/2/detail/detail/yugi-l.png?1371660955');
INSERT INTO duelists (name, age, gender, image) VALUES ('Joey Wheeler', 18, 'M', 'https://uploads2.yugioh.com/character/5/detail/detail/joey-l.png?1375717061');
INSERT INTO duelists (name, age, gender, image) VALUES ('Seto Kaiba', 18, 'M', 'https://ms.yugipedia.com//7/78/SetoKaiba-DSOD-DULI.png');
INSERT INTO duelists (name, age, gender, image) VALUES ('Maximillion Pegasus', 35, 'M', 'https://uploads2.yugioh.com/character/13/detail/detail/pagasus.png?1375717258');
