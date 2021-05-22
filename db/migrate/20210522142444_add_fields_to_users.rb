class AddFieldsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :gender, :string
    add_column :users, :location, :string, default: ""
    add_column :users, :reasons_for_joining, :text
    add_column :users, :is_active, :boolean, default: true
    add_column :users, :last_login, :datetime
    add_column :users, :last_activity_date, :datetime
    add_column :users, :age_range, :string, default: ""
    add_column :users, :username, :string
    add_column :users, :slug, :string
    add_column :users, :is_suspended, :boolean, default: false

    add_index :users, :phone, unique: true
    add_index :users, :email, unique: true
    add_index :users, :username, unique: true

  end
end
