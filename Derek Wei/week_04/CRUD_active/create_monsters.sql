CREATE TABLE monsters (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  mtype TEXT,
  element TEXT,
  atk INTEGER,
  def INTEGER,
  image TEXT,
  duelist_id INTEGER
);

-- seed data
INSERT INTO monsters (name, mtype, element, atk, def, image, duelist_id) VALUES ('Dark Magician', 'Spellcaster', 'DARK', 2500, 2100, 'https://ms.yugipedia.com//thumb/d/dd/DarkMagician-SBCB-EN-C-1E.png/409px-DarkMagician-SBCB-EN-C-1E.png', 1);
INSERT INTO monsters (name, mtype, element, atk, def, image, duelist_id) VALUES ('Blue Eyes White Dragon', 'Dragon', 'LIGHT', 3000, 2500,'https://ms.yugipedia.com//thumb/e/e5/BlueEyesWhiteDragon-LDS2-EN-UR-1E.png/414px-BlueEyesWhiteDragon-LDS2-EN-UR-1E.png', 3);
INSERT INTO monsters (name, mtype, element, atk, def, image, duelist_id) VALUES ('Gaia The Fierce Knight', 'Warrior', 'EARTH', 2300, 2100, 'https://ms.yugipedia.com//c/ce/GaiaTheFierceKnight-SS04-EN-C-1E.png', 1);
INSERT INTO monsters (name, mtype, element, atk, def, image, duelist_id) VALUES ('Relinquished', 'Spellcaster', 'DARK', 0, 0, 'https://ms.yugipedia.com//a/a2/Relinquished-LDS1-EN-C-1E.png', 4);
