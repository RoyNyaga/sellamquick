class User < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  #relationship definitions
  has_secure_password
  has_many :interests
  has_many :interested_categories, through: :interests, source: "category"

  #validations
  validates :name, presence: true, uniqueness: true
  validates :password, presence: true
  validates :phone, presence: true, uniqueness: true
  validates :location, presence: true

  #callbacks
  after_create :remove_spaces_from_slug



  private 

  def remove_spaces_from_slug
    self.slug = name.strip.gsub(" ", "-")
  end 
end
