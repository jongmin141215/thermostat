require 'sinatra/base'

class App < Sinatra::Base
  get '/' do
    erb :'thermostat'
  end

  post '/' do
    redirect to '/'
  end
end
