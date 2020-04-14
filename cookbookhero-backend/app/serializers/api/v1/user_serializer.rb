class Api::V1::RecipeSerializer < ActiveModel::Serializer
    attributes :id, :name, :username, :recipes
end