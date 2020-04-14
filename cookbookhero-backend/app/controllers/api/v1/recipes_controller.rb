class Api::V1::RecipesController < ApplicationController
    def create
      # Expected information:
      #   user_id: int,
      #   name: string, 
      #   history: string,
      #   directions: string,
      #   ingredients: [{ingredient: string, unit: string}]
      #   tags: [string],
      #   notes: string
      #   
      # 
      # user_id = self.params.user_id
      name = params[:name]
      history = params[:history]
      new_recipe = Recipe.new(name: name, history: history)
      # directions = self.params.directions
      # create ingredients which need to be created
      # associate ingredients
      new_recipe.add_ingredients(params[:ingredients])
      # create tags which need to be created
      # associate tags
      new_recipe.add_tags(params[:tags])
      # self.params
      new_recipe.save

      render json: new_recipe, serialize: Api::V1::RecipeSerializer
    end
  
    def index
      render json: Recipe.all, each_serializer: Api::V1::RecipeSerializer
    end
  
    def show
        render json: Recipe.find_by(username: params[:username])
    end

    private
    
    def recipe_params(params)
      
    end
  end
  