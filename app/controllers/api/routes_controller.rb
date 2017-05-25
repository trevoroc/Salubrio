class Api::RoutesController < ApplicationController

  def create
    @route = Route.new(route_params)
    if @route.save
      render json: ['Route saved'], status: 200 # TODO: may need to change
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def index
    @routes = Route.find(params[:ids])
    render :index
  end

  private

  def route_params
    params.require(:route).permit(:user_id,
                                  :name,
                                  :waypoints,
                                  :distance,
                                  :elevation)
  end
end
