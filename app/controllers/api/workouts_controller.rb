class Api::WorkoutsController < ApplicationController

  def create
    @workout = Workout.new(workout_params)
    if @workout.save
      render :show
    else
      render json: @workout.errors.full_messages, status: 422
    end
  end

  def index
    if params[:user_id]
      # TODO: Include routes when the time comes
      @workouts = Workout.find_by(user_id: params[:user_id])
    else
      @workouts = Workout.all
    end

    render :index
  end

  def show
    # TODO: Include routes when the time comes
    @workout = Workout.find(params[:id])
    if @workout
      render :show
    else
      render_not_found
    end
  end

  def update
    @workout = Workout.find(params[:id])
    if @workout.update_attributes(workout_params)
      render :show
    else
      render json: @workout.errors.full_messages, status: 404
    end
  end

  def destroy
    @workout = Workout.find(params[:id])
    if @workout
      @workout.destroy
      render json: ['Workout deleted.'], status: 200
    else
      render_not_found
    end
  end

  private

  def workout_params
    params.require(:workout).permit(
      :title,
      :datetime,
      :type,
      :duration,
      :distance,
      :elevation,
      :description
    )
  end

  def render_not_found
    render json: ['Workout does not exist.'], status: 404
  end
end
