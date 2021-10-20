class CreateBeers < ActiveRecord::Migration[6.1]
  def change
    create_table :beers do |t|
      t.text :beer_name
      t.text :brand
      t.float :abv
      t.text :image
      t.timestamps
    end
  end
end
