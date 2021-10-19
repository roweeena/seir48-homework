CREATE TABLE books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  author TEXT,
  cover TEXT,
  description TEXT
);



-- seed data if needed
INSERT INTO books (title, author) VALUES ('Market Wizards', 'Jack D. Schwager');
INSERT INTO books (title, author) VALUES ('One Up on Wall Street', 'John Rothchild and Peter Lynch');
