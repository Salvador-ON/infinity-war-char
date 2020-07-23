require 'rails_helper'

RSpec.describe 'test api sessions routes', type: :request do
  it 'return success if get /logged_in is valid ' do
    create_client_user
    sign_in
    get '/logged_in'
    expect(response).to have_http_status(:success)
    expect(JSON.parse(response.body)['logged_in']).to eq(true)
  end

  it 'return success if delete /logout is valid ' do
    create_client_user
    sign_in
    delete '/logout'
    expect(response).to have_http_status(:success)
    expect(JSON.parse(response.body)['logged_out']).to eq(true)
  end

  it 'returns false if user is not logged_in' do
    get '/logged_in'
    expect(JSON.parse(response.body)['logged_in']).to eq(false)
  end

  it 'returns true if user is logged_in' do
    create_client_user
    sign_in
    expect(JSON.parse(response.body)['logged_in']).to eq(true)
  end

  it 'returns false if user not logged_in correct' do
    create_client_user
    post '/signin', params: { user: { email: 'ut1@ut1.com', password: '1234567' } }
    expect(JSON.parse(response.body)['logged_in']).to eq(false)
  end

  it 'returns true if user logged_out correct' do
    create_client_user
    sign_in
    expect(JSON.parse(response.body)['logged_in']).to eq(true)
    delete '/logout'
    expect(JSON.parse(response.body)['logged_out']).to eq(true)
  end

  it 'should return user data and filter data' do
    create_client_user
    sign_in
    user_islogged
    expect(JSON.parse(response.body)['user']['name']).to eq('user test 1')
    expect(JSON.parse(response.body)['user']['filter_id']).to eq(1)
    expect(JSON.parse(response.body)['user']['filter_status']).to eq('0')
  end
end
