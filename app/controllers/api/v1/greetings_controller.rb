class API::V1::GreetingsController < ApplicationController
  def index
    @greet = Greeting.all.sample

    render json: @greet
  end
end
