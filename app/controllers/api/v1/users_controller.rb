class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token 
  skip_before_action :authenticate_request
  
  def create
    @user = User.new(user_params)
    if @user.save
      command = AuthenticateUser.call(params[:user][:phone], params[:user][:password])
      render status: 201, json: {
        user: @user,
        auth_token: command.result 
      }
    else
      render status: 422, json: {
        errors: @user.errors.full_messages
      }
    end 
  end 

  def user_params
    params.require(:user).permit(:name, :phone, :location, :password, :password_confirmation)
  end 
end
