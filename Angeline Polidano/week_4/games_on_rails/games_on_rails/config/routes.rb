Rails.application.routes.draw do
root :to => 'pages#home'

get '/magic8ball' => 'magic8ball#form'
get '/magic8ball/results' => 'magic8ball#results'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

get '/secretnumber' => 'secretnumber#form'
get 'secretnumber/results' => 'secretnumber#results'

end
