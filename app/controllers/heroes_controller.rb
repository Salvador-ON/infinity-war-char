class HeroesController < ApplicationController
  def index

    getApi()
  end

  require 'open-uri'
require 'json'


require 'digest'

 def getApi()
 time = Time.now.to_i
  publicKey = ENV[PUK]
  privateKey = ENV[PRK]
   value = (time.to_s + privateKey + publicKey).to_s

  md5 = Digest::MD5.new 
  md5.update "#{value}"
   
    
    url = "https://gateway.marvel.com:443/v1/public/characters?events=29&orderBy=name&limit=100&ts=#{time}&apikey=18dbfa75016d2c2843fa6814b0130ad6&hash="+ md5.to_s

  req = open(url)
  response_body = JSON.parse(req.read) 
  sp_array = Array.new()
  response_body['data']['results'].each do |sup|
    heroe = { 'name' => sup['name'],
              'url_image' => sup['thumbnail']['path'] + '.' + sup['thumbnail']['extension'],
              'urlink' => sup['urls'][0]['url'],'events' => sup['events']['items'].collect {|e| e['name']}
   }
    sp_array.push(heroe)
  end

  puts sp_array
  puts "---------"
  puts sp_array[0]['events']

 end
#29
 
end
