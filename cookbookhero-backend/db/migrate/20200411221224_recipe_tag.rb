class RecipeTag < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes_tags do |t|
      t.references :recipe, foreign_key: true
      t.references :tag, foreign_key: true
    end
  end
end
