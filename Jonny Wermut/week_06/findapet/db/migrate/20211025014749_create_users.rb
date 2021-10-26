class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.text :first_name
      t.text :last_name
      t.text :email
      t.string :password_digest
      t.boolean :admin, :default => false
      t.boolean :isBreeder, :default => false
      t.text :photo
      t.timestamps
    end
  end
end
