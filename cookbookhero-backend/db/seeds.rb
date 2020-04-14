# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Tag.destroy_all
Recipe.destroy_all 
Ingredient.destroy_all
Note.destroy_all
RecipeIngredient.destroy_all
# in console rails db:purge 
# rails dbconsole

maylene = User.create(name: 'Maylene')
pie = Recipe.create(name: 'pie', user: maylene)
Tag.create(name: 'dessert')

straw = Ingredient.create(name: 'strawberries')
sugar = Ingredient.create(name: 'sugar')

RecipeIngredient.create(recipe: pie, ingredient: straw, quantity: 2, unit: 'lbs')
RecipeIngredient.create(recipe: pie, ingredient: sugar, quantity: 2, unit: 'cups')