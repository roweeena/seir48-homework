Rails.application.routes.draw do
  root :to => "albums#index"
  resources :musicians
  resources :albums
end
