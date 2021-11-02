Rails.application.routes.draw do
    get '/galleries/' => 'galleries#index'
    get '/galleries/new/' => 'galleries#new', :as => :new_gallery
    post '/galleries/' => 'galleries#create'
    get '/galleries/:id/' => 'galleries#show', :as => :gallery
    get '/galleries/:id/edit/' => 'galleries#edit', :as => :edit_gallery
    post '/galleries/:id/' => 'galleries#update'
    delete '/galleries/:id/' => 'galleries#destroy'
end
