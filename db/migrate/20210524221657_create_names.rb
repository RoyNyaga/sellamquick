class CreateNames < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :brand
      t.references :categories, null: false, foreign_key: true
      t.text :description, default: ""
      t.string :used_state
      t.boolean :has_problem, default: false
      t.string :problem_statement
      t.integer :price
      t.boolean :is_arguable, default: false
      t.boolean :is_on_promotion, default: false
      t.string :promotion_end_date, default: ""
      t.integer :promotion_price
      t.string :available_colors, default: ""
      t.boolean :is_available, default: true
      t.references :users, null: false, foreign_key: true

      t.timestamps
    end
  end
end
