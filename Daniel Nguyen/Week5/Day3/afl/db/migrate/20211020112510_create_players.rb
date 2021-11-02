class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.text :name
      t.text :position
      t.integer :club_id
      t.integer :games_played
      t.float :average
      t.text :scores
    end
  end
end
