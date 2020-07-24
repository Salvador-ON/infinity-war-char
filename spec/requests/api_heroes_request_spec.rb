require 'rails_helper'

RSpec.describe "Heroes", type: :request do

  describe "GET /index" do
    it "should return http success and heroes array legnth should be greater than 0" do
      create_client_user
      sign_in
      get "/heroes"
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)['heroes'].length).not_to eq(0)
    end


    it "should return false if user is not logged in before get heroes" do
      get "/heroes"
      expect(JSON.parse(response.body)['logged_in']).to eq(false)
    end
  end

end
