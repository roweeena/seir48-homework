class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.text :image
      t.text :animal
      t.text :name
      t.float :price
      t.boolean :availability, :default => true
      t.text :description

      t.timestamps
    end
  end
end
