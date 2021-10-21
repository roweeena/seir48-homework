class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
      t.text :name
      t.text :born
      t.date :dob
      t.text :website
      t.text :genre
      t.text :image
      t.timestamps
    end
  end
end
