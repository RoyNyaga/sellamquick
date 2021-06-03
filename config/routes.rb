Rails.application.routes.draw do

  mount RailsAdmin::Engine => '/admin-dashboard', as: 'rails_admin'
  devise_for :admins
  root 'pages#index'
  # catch all route which redirects any route not specified to the root root path
  get '/w/*path' => 'pages#index'
  namespace :api do 
    namespace :v1 do 
      # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
      post 'authenticate', to: 'authentication#authenticate'
      # categories 
      get "/all-categories", to: "categories#category_list"
    end 
  end
end
