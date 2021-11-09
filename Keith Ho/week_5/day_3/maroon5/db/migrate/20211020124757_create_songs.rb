class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.text :name
      t.boolean :thumbs_up
      t.text :link
      t.timestamps
    end
  end
end
