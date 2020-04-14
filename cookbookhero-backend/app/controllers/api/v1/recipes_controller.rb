class Api::V1::RecipesController < ApplicationController
    def create
      # Expected information:
      #   user_id: int,
      #   name: string, 
      #   history: string,
      #   ingredients: [{ingredient: string, unit: string}]
      #   tags: [string]
      #   
      # 
      render json: params
    end
  
    def index
      render json: Recipe.all, each_serializer: Api::V1::RecipeSerializer
    end
  
    def show
        # render json: Recipe.find_by(id: )
    end

    private
    
    def recipe_params(params)
      
    end
  end
  