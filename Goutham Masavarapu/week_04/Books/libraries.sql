CREATE TABLE libraries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  location TEXT,
  books_available TEXT
);

INSERT INTO libraries (name, location) VALUES ('State Library Victoria', '328 Swanston St, Melbourne VIC 3000');
