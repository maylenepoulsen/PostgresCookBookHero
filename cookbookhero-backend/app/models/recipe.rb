class Recipe < ApplicationRecord
  belongs_to :user 
  has_and_belongs_to_many :tags 
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients
  has_many :notes
end
