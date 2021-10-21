Rails.application.routes.draw do
  
  #index
  get '/rodents' => 'rodents#index'
  
  #new/create
  get '/rodents/new' => 'rodents#new', :as => :new_rodent
  post '/rodents' => 'rodents#create'

  #show
  get '/rodents/:id' => 'rodents#show', :as => :rodent

  #edit/update
  get '/rodents/:id/edit' => 'rodents#edit', :as => :edit_rodent
  post '/rodents/:id' => 'rodents#update'

  #delete
  delete '/rodents/:id' => 'rodents#destroy'

end
