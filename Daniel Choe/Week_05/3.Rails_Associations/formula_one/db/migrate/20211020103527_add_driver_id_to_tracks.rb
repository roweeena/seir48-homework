class AddDriverIdToTracks < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :driver_id, :integer
  end
end
