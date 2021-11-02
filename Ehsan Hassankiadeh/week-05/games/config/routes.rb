Rails.application.routes.draw do
root :to => 'pages#home'
get '/games' => 'games#eight_ball'
get '/games/results' => 'games#results'
end
