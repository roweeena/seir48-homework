class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.text :name
      t.text :description
      t.text :video
      t.timestamps
    end
  end
end
