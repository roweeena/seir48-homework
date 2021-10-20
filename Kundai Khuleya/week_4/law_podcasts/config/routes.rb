Rails.application.routes.draw do

root :to => "lawyers#index"

  get '/lawyers'=> 'lawyers#index'
  get '/lawyers/new' => 'lawyers#new', :as => :new_lawyer
  post '/lawyers'=> 'lawyers#create'
  get'/lawyers/:id' => 'lawyers#show', :as => :lawyer
  get '/lawyers/:id/edit' => 'lawyers#edit', :as => :edit_lawyer
  post '/lawyers/:id' => 'lawyers#update'
  delete '/lawyers/:id' => 'lawyers#destroy'
end
