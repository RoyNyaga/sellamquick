class CategoryBlueprint < Blueprinter::Base
  identifier :id

  fields :name, :slug, :description
  field :photo do |category, options|
    category.photo
  end
end 