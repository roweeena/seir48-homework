CREATE TABLE studios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    website TEXT,
    description TEXT,
    knownfor TEXT
);

INSERT INTO studios (name, website, description, knownfor) VALUES ("Valve", "www.valvesoftware.com", "Small indie company, can't fix buggy game", "PORTAL, CS:GO");
INSERT INTO studios (name, website, description, knownfor) VALUES ("Riot Games", "www.riotgames.com", "Small indie company, can't fix buggy game", "League of Legends, Valorant");