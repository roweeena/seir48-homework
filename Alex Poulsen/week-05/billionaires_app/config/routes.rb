Rails.application.routes.draw do

  root :to => 'pages#index'
  #index
  get '/billionaires' => 'pages#index'

  get '/billionaires/new' => 'pages#new', :as => :new_billionaire

  get '/billionaires/:id' => 'pages#show', :as => :billionaire

  post '/billionaires/:id' => 'pages#update'

  get '/billionaires/:id/edit' => 'pages#edit', :as => :edit_billionaire

  post '/billionaires' => 'pages#create'

  delete '/billionaires/:id' => 'pages#destroy'

end
