class CreateBreeds < ActiveRecord::Migration[5.2]
  def change
    create_table :breeds do |t|
      t.text :name
      t.text :origin
      t.text :photo

      t.timestamps
    end
  end
end
