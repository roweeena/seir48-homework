Rails.application.routes.draw do

  resources :recipes

  root :to => 'pages#home'
  resources :users, :only => [:index, :new, :create]

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  resources :myfoods, :only => [:new, :create]
end
