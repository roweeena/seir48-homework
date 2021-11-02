class BreederIdToListings < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :breeder_id, :integer
  end
end
