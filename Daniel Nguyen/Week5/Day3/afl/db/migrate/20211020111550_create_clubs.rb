class CreateClubs < ActiveRecord::Migration[5.2]
  def change
    create_table :clubs do |t|
      t.text :name
      t.text :abbreviation
      t.integer :ladder_position
      t.integer :games_played
      t.integer :wins
      t.integer :losses
      t.integer :draws
      t.integer :premiership_points
      t.integer :points_for
      t.integer :points_against
      t.float :percentage
    end
  end
end
