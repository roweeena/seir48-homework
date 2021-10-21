class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
     t.text :title
     t.integer :musician_id
     t.date :released
     t.text :image
     t.timestamps
    end
  end
end
