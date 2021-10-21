class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.text "name"
      t.text "country"
      t.text "track_type"
      t.float "length"
      t.text "image"
    end
  end
end
