module Utilities
  def create_client_user
    User.create(email: 'ut1@ut1.com',
                name: 'user test 1',
                password: '123456',
                password_confirmation: '123456')
  end

  def sign_in
    post '/signin', params: { user: { email: 'ut1@ut1.com', password: '123456' } }
  end

  def log_out
    delete '/logout'
  end

  def sign_up_user
    post '/signup', params: { user: { email: 'ut1@ut1.com',
                                      name: 'user test 1',
                                      password: '123456',
                                      password_confirmation: '123456' } }
  end

  def sign_up_wrong_user
    post '/signup', params: { user: { email: 'ut1@ut1.com',
                                      password: '123456',
                                      password_confirmation: '123456' } }
  end

  def update_filter
    put '/filters/1', params: { filter: { status: 'A' } }
  end

  def user_islogged
    get '/logged_in'
  end
end
