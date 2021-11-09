class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.text :title
      t.text :published
      t.text :pages
      t.text :language
      t.text :image
      t.integer :author_id
      t.timestamps      
    end
  end
end
