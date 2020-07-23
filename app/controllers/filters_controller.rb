class FiltersController < ApplicationController
  include CurrentUserConcern
  before_action :authorize
  before_action :set_filter, only: [:show, :update]

  def index
    @filter = Filter.find(@current_user.id)
    render json: {
      filter: @filter
    }
  end

  def update
    @filter = Filter.find(params[:id])
    return unless @filter.user_id == @current_user.id


    if @filter.update(filter_params)
      render json: {
        status: 'updated'
      }
    else
      render json: {
        status: 'failed'
      }
    end
  end

  private

  def set_filter
    @filter = Filter.find(params[:id])
  end
  

  def filter_params
    params.require(:filter).permit(:status)
  end

end
