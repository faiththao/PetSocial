class CommentsController < ApplicationController
    def index 
        render json: Comment.all
    end

    def create
        comment = @current_user.posts.comments.create!(comment_params)
        render json: recipe, status: :created
    end 

    private 

    def comment_params
        params.permit(:comment, :likes)
    end
end