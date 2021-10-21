class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.text :name
      t.date :formation
      t.text :image
      t.timestamps
    end
  end
end
