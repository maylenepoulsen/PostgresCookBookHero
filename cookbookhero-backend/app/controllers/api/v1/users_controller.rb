class UsersController < ApplicationController
  def create
  end

  def index
    render json: User.all
  end

  def show
  end
end
