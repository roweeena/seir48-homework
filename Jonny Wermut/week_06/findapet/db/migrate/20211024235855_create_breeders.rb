class CreateBreeders < ActiveRecord::Migration[5.2]
  def change
    create_table :breeders do |t|
      t.text :name
      t.text :city
      t.text :state
      t.text :photo

      t.timestamps
    end
  end
end
