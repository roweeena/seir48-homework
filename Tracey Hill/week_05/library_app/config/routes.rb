Rails.application.routes.draw do
  root :to => 'works#index'
  resources :authors
  resources :books
end
