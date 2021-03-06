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
      # byebug
      user_id = params[:user_id]
      name = params[:title]
      history = params[:history]
      notes = params[:notes]
      directions = params[:directions]
      image = params[:image]
      new_recipe = Recipe.new(user_id: user_id, name: name, history: history, description: directions)
      new_recipe.notes << Note.create(information: notes, recipe: new_recipe)
      # create ingredients which need to be created
      # associate ingredients
      ingredients = JSON.parse(params[:ingredients])
      new_recipe.add_ingredients(ingredients)
      # create tags which need to be created
      # associate tags
      tags = JSON.parse(params[:tags])
      new_recipe.add_tags(tags)
      # self.params
      # new_recipe.save
      new_recipe.image.attach(params[:image])
      new_recipe.save

      render json: new_recipe, serialize: Api::V1::RecipeSerializer
    end
  
    def index
      render json: Recipe.all, each_serializer: Api::V1::RecipeSerializer
    end
  
    def show
      
      recipe = Recipe.find_by(id: params[:id])
      if recipe == nil
        render json: {message: "Recipe not found"}
      else
        render json: recipe, serialize: Api::V1::RecipeSerializer
      end
    end

    def destroy
      recipe = Recipe.find_by(id: params[:id])
      recipe.destroy
    end

    private
    
    # def recipe_params(params)
    #   params.require(:recipe).permit(:ingredients,:tags)
    # end
  end
  