Rails.application.routes.draw do
  root :to => "albums#home"
  resources :albums
  resources :songs
end
