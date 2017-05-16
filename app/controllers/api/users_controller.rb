class Api::UsersController < ApplicationController

  def create
    @user = User.create(user_params)
    if @user.save
      # login(@user)
      render :show # TODO: May need to update this later
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render :show # TODO: May need to update this later
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password) # TODO: May need to add more later
  end
end
