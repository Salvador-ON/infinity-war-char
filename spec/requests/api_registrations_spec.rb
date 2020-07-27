require 'rails_helper'

RSpec.describe 'test api registration routes', type: :request do
  it 'should return true if user is created propperly' do
    expect { sign_up_user }.to change { User.count }.by(1)
    expect(JSON.parse(response.body)['status']).to eq('created')
  end
end
