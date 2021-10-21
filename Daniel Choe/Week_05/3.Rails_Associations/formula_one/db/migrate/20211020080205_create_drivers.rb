class CreateDrivers < ActiveRecord::Migration[5.2]
  def change
    create_table :drivers do |t|
      t.text :name
      t.text :nationality
      t.text :team
      t.date :dob
      t.integer :current_ranking
      t.text :image
    end
  end
end
