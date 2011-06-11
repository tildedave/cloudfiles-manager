require 'sinatra'
require 'json'
require 'rubygems'
require 'httpclient'
require 'sinatra/reloader'

# not doing any actual templating, all data
# returned/parsed/displayed by JavaScript
require 'erubis'

class Auth
  AUTH_URL = 'https://auth.api.rackspacecloud.com/v1.0'

  def self.get_api_key
    return IO.read('./api-key')
  end

  def self.get_user
    return IO.read('./user')
  end

  def self.ensure_auth_info(session)
    if not (session.has_key?(:storage_url) and 
            session.has_key?(:cdn_management_url) and
            session.has_key?(:auth_token)) then
      Auth.get_auth_info session
    end
  end

  def self.get_auth_info(session)
    client = HTTPClient.new
    header = [['X-Auth-User', Auth.get_user],
              ['X-Auth-Key', Auth.get_api_key]]
    response = client.get(AUTH_URL, {}, header)

    session[:storage_url] = response.header['X-Storage-Url'][0]
    session[:cdn_management_url] = response.header['X-CDN-Management-Url'][0]
    session[:auth_token] = response.header['X-Auth-Token'][0]
  end
end

class CloudFileRepository
  def initialize(session)
    @auth_token = session[:auth_token]
    puts "INITIALIZING TOKEN #{@auth_token}"
  end

  def api_get(uri, args)
    args[:format] = 'json'

    puts "uri: #{uri}, token: #{@auth_token}"
    header = [[ "X-Auth-Token", @auth_token ]]
    client = HTTPClient.new
    response = client.get_content(uri, args, header)

    puts response
    return response
  end
end

class CDNRepository < CloudFileRepository
  attr_accessor :cdn_management_url

  def initialize(session)
    super(session)
    @cdn_management_url = session[:cdn_management_url]
  end

  def list
    client = HTTPClient.new
    puts "requesting with auth token #{@auth_token}"

    list_url = @cdn_management_url + "?format=json"
    puts "url #{list_url}"

    header = [ "X-Auth-Token", @auth_token ]
    response = client.get_content(list_url, {}, header)

    puts response
    return response
  end
end

class StorageRepository < CloudFileRepository
  attr_accessor :storage_url

  def initialize(session)
    super(session)
    @storage_url = session[:storage_url]
  end

  def list
    puts :storage_url
    return api_get(@storage_url, {})
  end
end

enable :sessions

before do
  Auth.ensure_auth_info session
end

get '/' do
  erubis :index
end

get '/info' do
end

get '/auth' do
  Auth.get_auth_info(session)
end

get '/containers' do
  storage_repository = StorageRepository.new(session)
  cdn_url = storage_repository.storage_url

  content_type :json
  storage_repository.list
end

