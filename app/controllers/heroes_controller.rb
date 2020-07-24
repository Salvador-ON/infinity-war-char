class HeroesController < ApplicationController
  include CurrentUserConcern
  before_action :authorize
  include FetchApiConcern
  

  def index
    heroes_data = get_api_heroes()
    render json: {
      heroes: heroes_data
    }
  end

  
 
end
