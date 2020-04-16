require 'faker'
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

# def find_or_create(model_class, column_name, args)
#     retVal = model_class.find_by(column_name.to_sym => args[column_name.to_sym])
#     # console.log(retVal)
#     if retVal == nil
#         retVal = model_class.create(args)
#     end

#     retVal
# end


maylene = User.create(name: 'Maylene', username: 'maylene')
lugh = User.create(name: 'lugh', username: 'lugh')

10.times do
    name = Faker::Name.unique.first_name
    User.create(name: name, username: name)
end

begin
    40.times do
        ing = Faker::Food.unique.ingredient
        Ingredient.create(name: ing)
        Tag.create(name: ing)
    end
rescue Faker::UniqueGenerator::RetryLimitExceeded
    puts 'Ingredient faker exceeded'
end

40.times do
    dish = Faker::Food.dish
    rec = Recipe.create(name: dish, user: User.all.sample, description: Faker::Lorem.paragraph, history: Faker::Name.name)
    rec.tags << Tag.find_or_create_by(name: dish)
    rec.notes << Note.create(information: Faker::Lorem.sentence, recipe: rec)
    rand(1..5).times do
        ing = Ingredient.all.sample
        while rec.ingredients.include?(ing)
            ing = Ingredient.all.sample
        end
        rec.tags << Tag.find_or_create_by(name: ing.name)
        ri = RecipeIngredient.create(recipe: rec, ingredient: Ingredient.all.sample, unit: Faker::Food.measurement)
    end
end