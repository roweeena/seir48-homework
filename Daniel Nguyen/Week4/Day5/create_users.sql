CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  image TEXT,
  team_id INTEGER,
  team_name TEXT,
  registered BOOLEAN,
  balance REAL
);

INSERT INTO users (first_name, last_name, email) VALUES ('Daniel', 'Nguyen', 'daniel.n.q.nguyen@gmail.com');
INSERT INTO users (first_name, last_name, email) VALUES ('Richard', 'Strauss', 'richard.strauss@email.com');
