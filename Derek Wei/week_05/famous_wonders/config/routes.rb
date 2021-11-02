Rails.application.routes.draw do
  root :to => 'wonders#home'
  get '/wonders' => 'wonders#index'
  get '/wonders/new' => 'wonders#new', :as => :new_wonder
  post '/wonders' => 'wonders#create'
  get '/wonders/:id' => 'wonders#show', :as => :wonder
  get '/wonders/:id/edit' => 'wonders#edit', :as => :edit_wonder
  post '/wonders/:id' => 'wonders#update'
  delete '/wonders/:id' => 'wonders#destroy'
end
