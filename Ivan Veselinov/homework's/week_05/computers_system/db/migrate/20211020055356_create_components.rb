class CreateComponents < ActiveRecord::Migration[5.2]
  def change
    create_table :components do |t|
      t.text :gpu
      t.text :ram
      t.text :hdd
      t.text :ssd
      t.text :motherboard
      t.date :date
      t.timestamps
    end
  end
end
