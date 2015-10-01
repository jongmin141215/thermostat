require 'sinatra/base'

class App < Sinatra::Base
  get '/' do
    erb :'thermostat'
  end
end
