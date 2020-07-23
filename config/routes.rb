Rails.application.routes.draw do
  get 'spa/index'
  delete :logout, to: "sessions#destroy"
  get :logged_in, to: "sessions#logged_in"
  post :signup, to: "users#create"
  post :signin, to: "sessions#create"
  root to: "spa#index"
end
