Rails.application.routes.draw do

get '/' => 'pages#home'

get '/magic' => 'magic#magic'
get '/magic/result' => 'magic#result'
end
