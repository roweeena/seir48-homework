Rails.application.routes.draw do
  root :to => 'albums#index'
  resources :albums
  resources :songs
end
