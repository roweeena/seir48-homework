Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'pages#home'
  get '/home' => 'pages#home'

  get '/eightball' => 'eightball#form'
  get '/eightball/result' => 'eightball#result'

  get '/number' => 'number#guess'
  get '/number/check' => 'number#check'

  get '/rock_paper_scissors' => 'game#home'
  get '/rock_paper_scissors/throw' => 'game#throw'

end
