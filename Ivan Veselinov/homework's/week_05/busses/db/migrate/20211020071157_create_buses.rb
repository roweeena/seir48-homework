class CreateBuses < ActiveRecord::Migration[5.2]
  def change
    create_table :buses do |t|
      t.text :model
      t.text :year
      t.text :number
      t.text :lines
      t.text :stops
      t.text :image
      t.timestamps
    end
  end
end
