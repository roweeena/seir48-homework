CREATE TABLE components (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  cpu TEXT,
  ram TEXT,
  gpu INTEGER,
  ssd TEXT,
  hdd TEXT,
  powersupply TEXT,
  wifi TEXT,
  cooler TEXT,
  blueray TEXT

);

INSERT INTO components(cpu, ram, gpu, ssd, hdd, powersupply, wifi, cooler, blueray) VALUES ('Intel I7 10900K','8gb DDR4','1050 TI Geforce','250gb', '1tb', '600w', '/', '/', 'no');
INSERT INTO components(cpu, ram, gpu, ssd, hdd, powersupply, wifi, cooler, blueray) VALUES ('Intel I7 11900KF','16gb DDR4','1660 TI Geforce','500gb', '2tb', '600w', '/', '/', 'yes');
