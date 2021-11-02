class AddCountriesIdToCities < ActiveRecord::Migration[5.2]
  def change
    add_column :cities, :country_id, :integer
  end
end
