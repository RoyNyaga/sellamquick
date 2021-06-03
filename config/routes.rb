Rails.application.routes.draw do
  
  mount RailsAdmin::Engine => '/admin-dashboard', as: 'rails_admin'
  devise_for :admins
  root 'pages#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post 'authenticate', to: 'authentication#authenticate'

  # categories 
  get "/all-gategories", to: "categories#category_list"

  get '/*path' => 'pages#index'

end
