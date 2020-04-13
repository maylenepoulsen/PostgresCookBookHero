# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Tag.delete_all
Recipe.delete_all 
Ingredient.delete_all
Note.delete_all
RecipeIngredient.delete_all
#in console rails db:purge 
# rails dbconsole

maylene = User.create(name: 'Maylene')
pie = Recipe.create(name: 'pie', user: maylene)
Tag.create(name: 'dessert')

Ingredient.create(name: 'strawberries')
