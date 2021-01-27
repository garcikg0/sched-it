class UsersController < ApplicationController
    has_secure_password 
    validates :username, uniqueness: { case_sensitive: false}

    def create 
        user = User.create(
            first_name: params[:first_name],
            last_name: params[:last_name],
            email: params[:email],
            username: params[:username],
            password: params[:password]
        )

        if user.valid? 
            token = encode_token({ user_id: user.id })
            render json: { user: UserSerializer.new(user), token: token }, status: :created
            render json: { error: user.errors.full_messages }, status: :bad_request
        else
            render json: { message: user.errors.full_messages }, status: :bad_request
        end
    end

    def login 
        user = User.find_by(username: params[:username])

        if user && user.authenticate(params[:password])
            token = encode_token({ user_id: user.id})
            render json: { user: UserSerializer.new(user), token: token}
        else
            render json: { message: "Invalid username or password" }, status: :unauthorized
        end
    end

    def autologin
        render json: @current_user
    end

end
