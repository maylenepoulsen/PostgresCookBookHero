class Api::V1::IngredientsController < ApplicationController
    def index
        render json: Ingredient.all, only: [:id, :name]
    end
end