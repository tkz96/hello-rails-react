class Api::V1::GreetingsController < ApplicationController
  def index
    @greet = Greeting.all.sample

    render json: @greet, status: :ok
  end
end
