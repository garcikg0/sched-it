Rails.application.routes.draw do
  resources :todos
  resources :notes
  resources :entries
  resources :journals
  resources :calendars
  resources :users, only: [:create]
  post "/login", to: "users#login"
  get "/autologin", to: "users#autologin"
end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html