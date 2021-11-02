class CreateMusicians < ActiveRecord::Migration[5.2]
  def change
    create_table :musicians do |t|
      t.text :name
      t.text :nationality
      t.text :biography
      t.text :image
      t.timestamps
    end
  end
end
