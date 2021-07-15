FactoryBot.define do
  locations = ["Nkoteng Centre Cameroon", "Mokolo Far North Cameroon", "Monatele Centre Cameroon",
  "Mora Far North Cameroon", "Mouloudou East Cameroon", "Mutengene Southwest Cameroon",
  "Nanga Eboko Centre Cameroon","Ndu Northwest Cameroon"]
  factory :user do
    name { Faker::Name.name }
    phone { Faker::PhoneNumber.subscriber_number(length: 12) }
    location { locations.sample }
    password { Faker::Internet.password(min_length: 8) }
  end
end
