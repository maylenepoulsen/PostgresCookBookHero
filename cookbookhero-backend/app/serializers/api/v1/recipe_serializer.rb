class Api::V1::RecipeSerializer < ActiveModel::Serializer
    attributes :id, :name, :ingredients, :user
    def ingredients
        self.object.recipe_ingredients.map do |ri|
            {
                name: ri.name,
                quantity: ri.quantity,
                unit: ri.unit
            }
        end
    end
end