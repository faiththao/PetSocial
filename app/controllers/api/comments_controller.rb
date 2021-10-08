class Api::CommentsController < ApplicationController
    def index 
        render json: Comment.all
    end

    def show
        render json: Comment.find_by(id: params[:post_id])
    end

    def create
        comment = @current_user.posts.comments.create!(comment_params)
        render json: recipe, status: :created
    end 

    def update
        comment = Comment.find_by(id: params[:id])
        if comment
            comment.update(post_params)
            render json: comment
        else
            render json: { error: "Comment not found" }, status: :not_found
        end
    end

    private 

    def comment_params
        params.permit(:comment, :likes)
    end
end