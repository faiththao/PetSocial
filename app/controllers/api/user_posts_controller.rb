class Api::UserPostsController < ApplicationController
    def index
        render json: @current_user.user_posts, status: :ok
    end
end