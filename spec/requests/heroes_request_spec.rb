require 'rails_helper'

RSpec.describe "Heroes", type: :request do

  describe "GET /index" do
    it "returns http success" do
      get "/heroes/index"
      expect(response).to have_http_status(:success)
    end
  end

end
