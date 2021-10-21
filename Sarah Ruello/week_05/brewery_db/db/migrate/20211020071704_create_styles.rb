class CreateStyles < ActiveRecord::Migration[6.1]
  def change
    create_table :styles do |t|
      t.string :style_name
      t.string :origin_country
      t.timestamps null: false
    end
  end
end
