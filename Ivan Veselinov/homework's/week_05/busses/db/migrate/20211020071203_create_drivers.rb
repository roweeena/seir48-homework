class CreateDrivers < ActiveRecord::Migration[5.2]
  def change
    create_table :drivers do |t|
      t.text :name
      t.text :surname
      t.date :dob
      t.date :today
      t.text :image
      t.timestamps
    end
  end
end
