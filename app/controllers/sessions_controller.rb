class SessionsController < ApplicationController
  include CurrentUserConcern

  def create
    user = User
      .find_by(email: params['user']['email'])
      .try(:authenticate, params['user']['password'])

    if user
      session[:user_id] = user.id
      render json: {
        logged_in: true,
        user: { id: user.id,
                name: user.name }
      }
    else
      render json: { logged_in: false, error: 'Wrong User / Password Combination' }
    end
  end

  def logged_in
    if @current_user
      filter = Filter.find(@current_user.id)
      render json: {
        logged_in: true,
        user: { id: @current_user.id,
                name: @current_user.name,
                filter_id: filter.id},
        filter:{status: filter.status}}
    else
      render json: {
        logged_in: false
      }
    end
  end

  def destroy
    reset_session
    render json: {
      logged_out: true
    }
  end
end
