class BreedIdToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :breed_id, :integer
  end
end
