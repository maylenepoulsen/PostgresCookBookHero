class Api::V1::RecipesController < ApplicationController
    def create
    end
  
    def index
      render json: Recipe.all, each_serializer: Api::V1::RecipeSerializer
    end
  
    def show
        # render json: Recipe.find_by(id: )
    end
  end
  