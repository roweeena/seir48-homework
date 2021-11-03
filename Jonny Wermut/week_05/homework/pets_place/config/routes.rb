Rails.application.routes.draw do
  root :to => 'pets#index'
  resources :breeders
  resources :pets
end
