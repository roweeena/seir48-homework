class CreateBreweries < ActiveRecord::Migration[5.2]
  def change
    create_table :breweries do |t|
      t.string :name
      t.text :location
      t.text :logo
      t.timestamps
    end
  end
end
