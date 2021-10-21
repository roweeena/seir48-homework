class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.text :title
      t.float :price
      t.date :published
      t.text :image
      t.timestamps
    end
  end
end
