class CategoryBlueprint < Blueprinter::Base
  identifier :id

  fields :name, :slug, :description
  field :photo do |category, options|
    url_for(category.photo)
  end
end 