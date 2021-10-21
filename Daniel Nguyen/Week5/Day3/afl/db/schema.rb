# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_20_112510) do

  create_table "clubs", force: :cascade do |t|
    t.text "name"
    t.text "abbreviation"
    t.integer "ladder_position"
    t.integer "games_played"
    t.integer "wins"
    t.integer "losses"
    t.integer "draws"
    t.integer "premiership_points"
    t.integer "points_for"
    t.integer "points_against"
    t.float "percentage"
  end

  create_table "players", force: :cascade do |t|
    t.text "name"
    t.text "position"
    t.integer "club_id"
    t.integer "games_played"
    t.float "average"
    t.text "scores"
  end

end
