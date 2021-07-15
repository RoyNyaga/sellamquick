FactoryBot.define do
  factory :name do
    brand { "MyString" }
    categories { nil }
    description { "MyText" }
    used_state { "MyString" }
    has_problem { false }
    problem_statement { "MyString" }
    price { 1 }
    is_arguable { false }
    is_on_promotion { false }
    promotion_end_date { "MyString" }
    promotion_price { 1 }
    available_colors { "MyString" }
    is_available { false }
    users { nil }
  end
end
