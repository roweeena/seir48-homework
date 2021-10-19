Rails.application.routes.draw do
  root :to => 'players#index', :as => :index
end
