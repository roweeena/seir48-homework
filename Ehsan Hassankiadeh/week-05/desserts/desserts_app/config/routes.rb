Rails.application.routes.draw do
  get '/desserts' => 'desserts#index'
  get 'desserts/new' => 'desserts#new', :as => :new_dessert
  post '/desserts' => 'desserts#create'
  get '/desserts/:id' => 'desserts#show', :as => :dessert
  get '/desserts/:id/edit' => 'desserts#edit', :as => :edit_dessert
  post '/desserts/:id' => 'desserts#update'
  delete '/desserts/:id' => 'desserts#destroy'
end
