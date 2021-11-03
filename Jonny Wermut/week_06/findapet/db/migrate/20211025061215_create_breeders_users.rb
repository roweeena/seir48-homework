class CreateBreedersUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :breeders_users, :id => false do |t|
      t.integer :user_id
      t.integer :breeder_id
      t.timestamps
    end
  end
end
