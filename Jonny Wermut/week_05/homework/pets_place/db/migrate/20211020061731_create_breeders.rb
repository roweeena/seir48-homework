class CreateBreeders < ActiveRecord::Migration[5.2]
 
  def change
    create_table :breeders do |t|
      t.text :name
      t.text :type
      t.text :location
      t.text :about
      t.text :image
      t.text :phone
      t.text :email
      t.timestamps
    end
  end

end
