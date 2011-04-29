require 'sinatra'
require 'json'
require 'rubygems'
require 'cloudfiles'
require 'sinatra/reloader'

# not doing any actual templating, all data
# returned/parsed/displayed by JavaScript
require 'erubis'

enable :sessions

def get_cloudfiles_connection
    return CloudFiles::Connection.new(:username => IO.read('./user'),
                                      :api_key => IO.read('./api-key'))

end

get '/' do
  erubis :index
end

get '/containers' do
  cf = get_cloudfiles_connection
  
  content_type :json
  cf.containers.to_json
end
