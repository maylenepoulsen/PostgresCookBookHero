class Api::V1::UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :username, :recipes
    def recipes
        self.object.recipes.map do |r|
            {
                id: r.id,
                name: r.name,
                history: r.history,
                description: r.description,
                ingredients: r.recipe_ingredients.map do |ri|
                    {
                        name: ri.name,
                        quantity: ri.quantity,
                        unit: ri.unit
                    }
                end
            }
        end
    end
end