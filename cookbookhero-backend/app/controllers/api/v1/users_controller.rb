class Api::V1::UsersController < ApplicationController
  def create

    render json: params
  end

  def login
    puts "In login"
    new_user = User.find_by(username: params[:username])
    if new_user == nil
      render json: {message: "Username already taken"}
    else
      render json: new_user, serialize: Api::V1::UserSerializer
    end
  end

  def signup
    puts "In signup"
    # byebug
    new_user = User.find_by(username: params[:username])
    if new_user == nil
      User.create(name: params[:name], username: params[:username])
      render json: new_user, serialize: Api::V1::UserSerializer
    else
      render json: {message: "Username already taken"}
    end
  end

  def index
    render json: User.all, each_serializer: Api::V1::UserSerializer
  end

  def show
  end
end
