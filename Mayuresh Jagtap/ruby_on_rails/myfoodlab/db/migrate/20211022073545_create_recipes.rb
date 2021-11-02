class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.text :title
      t.text :image
      t.integer :prep_time
      t.integer :cook_time
      t.text :course
      t.integer :serves
      t.text :main_recipe
      t.text :video

      t.timestamps
    end
  end
end
