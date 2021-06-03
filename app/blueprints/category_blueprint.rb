class CategoryBlueprint < Blueprinter::Base

  identifier :id

  fields :name, :slug, :description
  field :photo do |category, options|
    Rails.application.routes.url_helpers.url_for(category.photo)
  end
end 