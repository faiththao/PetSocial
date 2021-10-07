class Api::PostsController < ApplicationController
    def index 
        render json: Post.all
    end

    def create
        post = @current_user.posts.create!(post_params)
        render json: post, status: :created
    end

    # def update
    #     post = Post.find_by(id: params[:id])
    #     if post
    #         post.update(post_params)
    #         render json: post
    #     else
    #         render json: { error: "Post not found" }, status: :not_found
    #     end
    # end

    def increment_likes
        post = Post.find_by(id: params[:id])
        if post
            Post.update(likes: bird.likes + 1)
            render json: post
        else
            render json: { error: "Post not found" }, status: :not_found
        end
    end


    private

    def post_params
        params.permit(:img_url, :caption, :likes)
    end
end
