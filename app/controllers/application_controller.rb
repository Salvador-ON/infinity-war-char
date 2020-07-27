class ApplicationController < ActionController::Base
  private

  def authorize
    (render json: { logged_in: false }) unless @current_user
  end
end
