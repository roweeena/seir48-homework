class CreateProcessors < ActiveRecord::Migration[5.2]
  def change
    create_table :processors do |t|
      t.text :name
      t.text :model
      t.date :year
      t.text :image
      t.text :video
      t.timestamps
    end
  end
end
