class Recipe < ApplicationRecord
  include Rails.application.routes.url_helpers

  belongs_to :user 
  has_and_belongs_to_many :tags 
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients
  has_many :notes
  has_one_attached :image

  def get_image_url
    # puts "\n\n\n`#{self.image}`\n\n\n\n"
    if self.image.attached?
      url_for(self.image)
    else
      ''
    end
  end

  def add_ingredient(ingredient)
    new_ingredient = Ingredient.find_by(name: ingredient['name'].singularize.downcase)
    if new_ingredient == nil
      new_ingredient = Ingredient.create(name: ingredient['name'].singularize.downcase)
    end
    
    RecipeIngredient.create(recipe: self, ingredient: new_ingredient, unit: ingredient['unit'])
  end

  def add_ingredients(ingredients_array)
    ingredients_array.each{ |i| add_ingredient(i) }
    nil
  end

  def add_tag(tag)
    new_tag = Tag.find_by(name: tag.downcase)
    if new_tag == nil
      new_tag = Tag.create(name: tag.downcase)
    end
    
    self.tags << new_tag
    new_tag
  end
  
  def add_tags(tags)
    tags.map{ |i| add_tag(i) }
    nil
  end
end
