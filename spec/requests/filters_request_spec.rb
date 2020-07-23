require 'rails_helper'

RSpec.describe "Filters", type: :request do
  it 'return success if filter status is updated correct ' do
    create_client_user
    sign_in
    update_filter
    expect(response).to have_http_status(:success)
    expect(JSON.parse(response.body)['status']).to eq('updated')
  end
end
