class Api::V1::RecipeSerializer < ActiveModel::Serializer
    attributes :id, :name, :ingredients, :user, :tags, :directions, :notes, :created_at, :image_url

    def image_url
        self.object.get_image_url
    end
    
    def ingredients
        self.object.recipe_ingredients.map do |ri|
            count = ri.unit.to_i
            {
                name: ri.name,
                # quantity: ri.quantity,
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
    
    def directions
        self.object.description
    end
    
    def notes
        self.object.notes.map {|note| note.information}
    end
end