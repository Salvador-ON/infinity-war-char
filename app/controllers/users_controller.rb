class UsersController < ApplicationController
  def create
    user = User.new(
      email: params['user']['email'],
      name: params['user']['name'],
      password: params['user']['password'],
      password_confirmation: params['user']['password_confirmation']
    )
    valdiate_user_creation(user)
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

  def create_filter
    Filter.create(status: 0, user_id: @current_user.id)
  end

  def valdiate_user_creation(user)
    if user.valid?
      user.save
      session[:user_id] = user.id
      filter = Filter.find(@current_user.id)
      render json: {
        status: :created,
        logged_in: true,
        logged_in: true,
        user: { id: @current_user.id,
                name: @current_user.name,
                filter_id: filter.id },
        filter: { status: filter.status }
      }
    else
      render json: { status: :not_created, error: user.errors }
    end
  end
end
