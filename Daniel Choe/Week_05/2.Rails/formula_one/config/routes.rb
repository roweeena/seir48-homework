Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'stats#home'
  get '/index/new' => 'stats#new', :as => :new_driver
  get '/index/:id' => 'stats#show', :as => :stat
  get '/index' => 'stats#index'
  get '/index/:id/edit' => 'stats#edit', :as => :edit_stat
  post '/index/:id' => 'stats#update'
  post '/index' => 'stats#create'
  delete '/index/:id' => 'stats#destroy'
end
