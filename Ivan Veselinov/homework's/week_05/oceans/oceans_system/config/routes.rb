Rails.application.routes.draw do
  #home step 1
get '/oceans' => 'oceans#home'

#input step 3
get '/oceans/new' => 'oceans#new', :as => :new_ocean

#create step 4
post '/oceans' => 'oceans#create'

#show step 2
get '/oceans/:id' => 'oceans#show', :as => :ocean

#edit 5
get 'oceans/:id/edit' => 'oceans#edit', :as => :ocean_edit

#update step 6
post 'oceans/:id' => 'oceans#update'

#delete step 7
delete '/oceans/:id' => 'oceans#destroy'
end
