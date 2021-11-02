class CreateMyfoodsRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :myfoods_recipes, :id => false do |t|
      t.text :title
      t.integer :myfood_id
      t.integer :recipe_id
    end
  end
end
