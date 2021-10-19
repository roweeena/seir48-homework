Rails.application.routes.draw do
  get '/players' => 'players#index', :as => :players
  get '/players/new' => 'players#new', :as => :new_player
  post '/players' => 'players#add'
  get '/players/:id' => 'players#show', :as => :player
  get '/players/:id/edit' => 'players#edit', :as => :edit_player
  post '/players/:id' => 'players#update'
  # DELETE
end
