class AddStyleNameToBeers < ActiveRecord::Migration[6.1]
  def change
    add_column :beers, :style_name, :string
  end
end
