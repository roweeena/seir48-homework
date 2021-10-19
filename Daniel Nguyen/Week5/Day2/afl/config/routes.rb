Rails.application.routes.draw do
  root :to => 'players#index', :as => :index
  # NEW
  # CREATE
  get '/players/:id' => 'players#show', :as => :player
  # EDIT
  # UPDATE
  # DELETE
end
