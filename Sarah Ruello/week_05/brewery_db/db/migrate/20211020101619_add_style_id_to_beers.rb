class AddStyleIdToBeers < ActiveRecord::Migration[6.1]
  def change
    add_column :beers, :style_id, :integer
    remove_column :beers, :style_name
  end
end
