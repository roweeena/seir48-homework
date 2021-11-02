class CreateCountries < ActiveRecord::Migration[5.2]
  def change
    create_table :countries do |t|
      t.text :name
      t.text :capital
      t.text :currency
      t.text :image
      t.date :formation
      t.timestamps


    end
  end
end
