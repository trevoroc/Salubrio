class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username],
                                     params[:user][:password])
    if @user
      login(@user)
      render '/api/users/show'
    else
      # TODO: Check that it's ok to return a 200 here
      render json: ['The username or password did not match'], status: 200
    end
  end

  def destroy
    logout
    render json: 'You logged out!', status: 200
  end
end
