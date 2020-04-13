class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :history
      t.integer :user_id
      t.text :description

      t.timestamps
    end
  end
end
