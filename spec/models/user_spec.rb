require 'rails_helper'

RSpec.describe User, type: :model do
  context "name validation" do 
    context "when validating presence" do 
      let(:user) { build(:user, name: "") }
      it "users name must be present" do 
        user.valid?
        expect(user.errors.full_messages).to include("Name can't be blank")
      end 
    end 

    context "when validating uniqueness" do 
      let(:user1) { create(:user) }
      it "users name must be unique" do 
        user2 = build(:user, name: user1.name)
        user2.valid?
        expect(user2.errors.full_messages).to include("Name has already been taken")
      end 
    end 
  end 

  context "waiting for next test" do 

  end 
end
