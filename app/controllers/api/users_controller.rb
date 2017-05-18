class Api::UsersController < ApplicationController

  def create
    @user = User.create(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render_errors @user
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render :show
    else
      render_errors @user
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

  def render_errors(user)
    render json: user.errors.full_messages, status: 422
  end
end
