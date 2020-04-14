class Recipe < ApplicationRecord
  belongs_to :user 
  has_and_belongs_to_many :tags 
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients
  has_many :notes

  def add_ingredient(ingredient)
    new_ingredient = Ingredient.find_by(name: ingredient[:name].singularize)
    if new_ingredient == nil
      new_ingredient = Ingredient.create(name: ingredient[:name].singularize)
    end
    
    RecipeIngredient.create(recipe: self, ingredient: new_ingredient, unit: ingredient[:unit])
  end

  def add_ingredients(ingredients_array)
    ingredients_array.each{ |i| add_ingredient(i) }
    nil
  end

  def add_tag(tag)
    new_tag = Tag.find_by(name: tag)
    if new_tag == nil
      new_tag = Tag.create(name: tag)
    end
    
    self.tags << new_tag
    new_tag
  end
  
  def add_tags(tags)
    tags.map{ |i| add_tag(i) }
    nil
  end
end
