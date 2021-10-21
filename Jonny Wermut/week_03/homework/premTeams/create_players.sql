CREATE TABLE players (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	team_id INTEGER,
	name TEXT,
	position TEXT,
	goals INTEGER,
	assists INTEGER
);

INSERT INTO players (team_id, name, position, goals, assists) VALUES (1, 'Bobby Firmino', 'Striker', 6, 5);
INSERT INTO players (team_id, name, position, goals, assists) VALUES (2, 'Bobby Firmino', 'Striker', 6, 5);
INSERT INTO players (team_id, name, position, goals, assists) VALUES (3, 'Bobby Firmino', 'Striker', 6, 5);