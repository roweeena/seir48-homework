Rails.application.routes.draw do
  get '/' => 'pages#home'
  get '/8ball' => 'eightball#play'
  get '/8ball/results' => 'eightball#results'
  get 'secretnumber' => 'secretnumber#play'
  get 'secretnumber/results' => 'secretnumber#results'
  get '/spr' => 'spr#play'
  get '/spr/results' => 'spr#results'
end
