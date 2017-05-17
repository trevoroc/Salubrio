class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username],
                                     params[:user][:password])
    if @user
      login(@user)
      render '/api/users/show'
    else
      # TODO: Make sure to have an error handling callback on the frontend
      render json: ['The username or password did not match'], status: 422
    end
  end

  def destroy
    logout
    render json: ['You logged out!'], status: 200
  end
end
