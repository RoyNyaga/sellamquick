class CategoryBlueprint < Blueprinter::Base
  identifier :id

  fields :name, :slug, :description
end 