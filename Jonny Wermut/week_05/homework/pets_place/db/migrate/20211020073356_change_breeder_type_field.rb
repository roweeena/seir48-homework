class ChangeBreederTypeField < ActiveRecord::Migration[5.2]
  def change
    add_column :breeders, :breedType, :text
    remove_column :breeders, :type
  end
end
