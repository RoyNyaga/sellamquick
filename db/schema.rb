# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_05_24_222445) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.string "slug"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "interests", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "category_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_id"], name: "index_interests_on_category_id"
    t.index ["user_id"], name: "index_interests_on_user_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "brand"
    t.bigint "category_id", null: false
    t.text "description", default: ""
    t.string "used_state"
    t.boolean "has_problem", default: false
    t.string "problem_statement"
    t.integer "price"
    t.boolean "is_arguable", default: false
    t.boolean "is_on_promotion", default: false
    t.string "promotion_end_date", default: ""
    t.integer "promotion_price"
    t.string "available_colors", default: ""
    t.boolean "is_available", default: true
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_id"], name: "index_products_on_category_id"
    t.index ["user_id"], name: "index_products_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "phone"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "gender"
    t.string "location", default: ""
    t.text "reasons_for_joining"
    t.boolean "is_active", default: true
    t.datetime "last_login"
    t.datetime "last_activity_date"
    t.string "age_range", default: ""
    t.string "username"
    t.string "slug"
    t.boolean "is_suspended", default: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["phone"], name: "index_users_on_phone", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "interests", "categories"
  add_foreign_key "interests", "users"
  add_foreign_key "products", "categories"
  add_foreign_key "products", "users"
end
