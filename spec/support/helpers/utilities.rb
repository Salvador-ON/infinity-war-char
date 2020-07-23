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
end
