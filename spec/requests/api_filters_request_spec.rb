require 'rails_helper'

RSpec.describe "Filters", type: :request do
  it 'return success if filter status is updated correct ' do
    create_client_user
    sign_in
    update_filter
    expect(response).to have_http_status(:success)
    expect(JSON.parse(response.body)['status']).to eq('updated')
  end

  it 'should return user data and filter data after update filter' do
    create_client_user
    sign_in
    user_islogged
    expect(JSON.parse(response.body)['user']['name']).to eq('user test 1')
    expect(JSON.parse(response.body)['user']['filter_id']).to eq(1)
    expect(JSON.parse(response.body)['user']['filter_status']).to eq('0')
    update_filter
    user_islogged
    expect(JSON.parse(response.body)['user']['filter_status']).to eq('A')
  end
end
