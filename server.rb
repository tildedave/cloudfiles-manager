require 'sinatra'
require 'rubygems'
require 'cloudfiles'
require 'sinatra/reloader'

enable :sessions

get '/' do
  'Hello, world!'
end

get '/files' do
  puts session
  if not session.has_key?(:cf) then
    print session
    redirect to('/login')
  end

  'better show some files!'
end

get '/login' do
  session[:cf] = CloudFiles::Connection.new(:username => IO.read('./user'),
                                            :api_key => IO.read('./api-key'))
  redirect back
end
