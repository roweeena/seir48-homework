class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.text :title
       t.text :published
       t.text :genre
       t.text :language
       t.text :image
       t.timestamps


    end
  end
end
