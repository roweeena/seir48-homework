class CreateBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.string :name
      t.float :abv
      t.text :image
      t.text :beer_style
      t.integer :brewery_id
      t.timestamps
    end
  end
end
