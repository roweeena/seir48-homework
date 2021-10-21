Rails.application.routes.draw do
  get '/' => 'mountains#home', :as => :home
  get '/mountain/add' => 'mountains#add', :as => :add
  post '/mountain/add' => 'mountains#new'
  get '/mountain/:id' => 'mountains#details', :as => :mountain_details
  get '/mountain/edit/:id' => 'mountains#edit', :as => :mountain_edit
  post '/mountain/edit/:id' => 'mountains#saveEdit'
  delete 'mountain/:id' => 'mountains#destroy'
end
