Rails.application.routes.draw do
root :to => "cities#index"
resources :countries
resources :cities



end
