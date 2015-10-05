require 'sinatra/base'

class App < Sinatra::Base
  get '/' do
    erb :'thermostat'
  end

  post '/' do
    p params
    redirect to '/'
  end
end
