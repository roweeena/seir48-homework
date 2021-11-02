class CreateBreedersBreeds < ActiveRecord::Migration[5.2]
  def change
    create_table :breeders_breeds, :id => false do |t|
      t.integer :breeder_id
      t.integer :breed_id

      t.timestamps
    end
  end
end
