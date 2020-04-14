class Api::V1::RecipeSerializer < ActiveModel::Serializer
    attributes :id, :name, :ingredients, :user, :tags
    def ingredients
        self.object.recipe_ingredients.map do |ri|
            {
                name: ri.name,
                quantity: ri.quantity,
                unit: ri.unit
            }
        end
    end
    def user
        u = self.object.user
        {
            id: u.id,
            username: u.username
        }
    end
    def tags
        self.object.tags.map{ |tag| tag.name }
    end
end