class User < ApplicationRecord
  has_secure_password
  has_many :interests
  has_many :interested_categories, through: :interests, source: "category"

  validates :name, presence: true, uniqueness: true
  validates :password, presence: true
  validates :phone, presence: true, uniqueness: true
  validates :location, presence: true
end
