Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :recipes, only: [:create, :index]
      resources :users, only: [:create, :index]

      post "login", to: "users#login"
      post "signup", to: "users#signup"
    end
  end
end
