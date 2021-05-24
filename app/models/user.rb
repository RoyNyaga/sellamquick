class User < ApplicationRecord
  has_secure_password
  has_many :interests
  has_many :interested_categories, through: :interests, source: "category"
end
