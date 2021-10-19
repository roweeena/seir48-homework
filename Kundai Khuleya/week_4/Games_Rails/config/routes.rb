Rails.application.routes.draw do

root :to => 'pages#pages'

get '/answerlists' => 'pages#answerlist'
get '/application' => 'pages#application'
get '/pages'=> 'pages#pages'
get '/users' => 'pages#users'

 end
