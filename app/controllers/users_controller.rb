class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create(user_params)
       
        if user.valid?
          render json: { user: user, status: :created}
        else
          render json: { error: 'failed to create user', status: :not_acceptable}
        end
    end

    def show
        render json: @current_user
    end

    def password=(new_password)
        self.password_digest = dumb_hash(new_password)
    end

    def authenticate(password)
        return nil unless dumb_hash(password) == password_digest
        self
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

    def dumb_hash(input)
        input.bytes.reduce(:+)
    end
end