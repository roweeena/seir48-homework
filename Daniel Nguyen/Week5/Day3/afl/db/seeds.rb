Club.create :name => 'Adelaide Crows', :abbreviation => 'ADE'
Club.create :name => 'Brisbane Lions', :abbreviation => 'BRL'
Club.create :name => 'Carlton Blues', :abbreviation => 'CAR'
Club.create :name => 'Collingwood Magpies', :abbreviation => 'COL'
Club.create :name => 'Essendon Bombers', :abbreviation => 'ESS'
Club.create :name => 'Fremantle Dockers', :abbreviation => 'FRE'
Club.create :name => 'Geelong Cats', :abbreviation => 'GEE'
Club.create :name => 'Gold Coast Suns', :abbreviation => 'GCS'
Club.create :name => 'Greater Western Sydney Giants', :abbreviation => 'GWS'
Club.create :name => 'Hawthorn Hawks', :abbreviation => 'HAW'
Club.create :name => 'Melbourne Demons', :abbreviation => 'MEL'
Club.create :name => 'North Melbourne Kangaroos', :abbreviation => 'NTH'
Club.create :name => 'Port Adelaide Power', :abbreviation => 'PTA'
Club.create :name => 'Richmond Tigers', :abbreviation => 'RIC'
Club.create :name => 'St Kilda Saints', :abbreviation => 'STK'
Club.create :name => 'Sydney Swans', :abbreviation => 'SYD'
Club.create :name => 'West Coast Eagles', :abbreviation => 'WCE'
Club.create :name => 'Western Bulldogs', :abbreviation => 'WBD'

puts "Database seeded. #{ Club.count } clubs created"

Player.destroy_all

Player.create :name => 'Jack Steele', :position => 'MID', :club_id => '15', :scores => '78,109,125,121,115,106,89,136,117,84,118,137,133,,114,157,138,149,106,162,139,103,134'

Player.create :name => 'Max Gawn', :position => 'RUC', :club_id => '11', :scores => '73,108,135,132,131,107,72,108,105,129,118,108,119,,97,96,108,95,119,109,84,97,139'


puts "Database seeded. #{ Player.count } players created"
