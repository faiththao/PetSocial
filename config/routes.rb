Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  namespace :api do
    resources :comments, only: [:index, :create]
    resources :posts, only: [:index, :create, :update]
    # delete "/posts/:id/delete", to: "posts#destroy"
    patch "/posts/:id/like", to: "posts#increment_likes"
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
