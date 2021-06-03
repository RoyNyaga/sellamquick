class CategoriesController < ApplicationController
  skip_before_action :verify_authenticity_token 
  skip_before_action :authenticate_request
  
  def category_list 
    categories = Category.all 
    blue_print_categories = CategoryBlueprint.render(categories)

    render json: blue_print_categories
  end 
end
