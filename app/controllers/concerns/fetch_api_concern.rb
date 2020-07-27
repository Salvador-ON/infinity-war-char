module FetchApiConcern
  extend ActiveSupport::Concern

  require 'net/http'
  require 'json'
  require 'digest'

  def resquest_data(url)
    uri = URI(url)
    response = Net::HTTP.get(uri)
    response_body = JSON.parse(response)
    sp_array = []
    response_body['data']['results'].each do |sup|
      heroe = { 'name' => sup['name'],
                'url_image' => sup['thumbnail']['path'] + '.' + sup['thumbnail']['extension'],
                'url_link' => sup['urls'][0]['url'],
                'events' => sup['events']['items'].collect { |e| e['name'] } }
      sp_array.push(heroe)
    end

    sp_array
  end

  def fetch_api_heroes()
    time = Time.now.to_i
    public_key = ENV['PUKEY']
    private_key = ENV['PRKEY']
    value = (time.to_s + private_key + public_key).to_s
    md5 = Digest::MD5.new
    md5.update value.to_s

    api_url = 'https://gateway.marvel.com:443/v1/public/characters'
    api_param = "?events=29&orderBy=name&limit=100&ts=#{time}&apikey=#{public_key}&hash=" + md5.to_s
    url = api_url + api_param
    heroes_array = resquest_data(url)
    heroes_array
  end
end
