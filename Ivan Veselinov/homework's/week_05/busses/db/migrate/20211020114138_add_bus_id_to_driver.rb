class AddBusIdToDriver < ActiveRecord::Migration[5.2]
  def change
    add_column :drivers, :bus_id, :integer
  end
end
