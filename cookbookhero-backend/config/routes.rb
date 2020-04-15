Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :recipes, only: [:create, :index, :show]
      resources :users, only: [:index, :show]
      resources :ingredients, only: [:index]

      post "login", to: "users#login"
      post "signup", to: "users#signup"
      get "users/:id/recipes", to: "users#recipes"
    end
  end
end
