Rails.application.routes.draw do
  root :to => "index#home"
  resources :styles
  resources :beers  
end
