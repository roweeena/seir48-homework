Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => "pages#home"

  get "/magic" => "magic#form"
  get "/magic/results" => "magic#results"

  get "/secret" => "secret#form"
  get "/secret/results" => "secret#results"

  get "/rock_paper_scissors" => "rock_paper_scissors#play"
  get "/rock_paper_scissors/:throw" => "rock_paper_scissors#results"
end
