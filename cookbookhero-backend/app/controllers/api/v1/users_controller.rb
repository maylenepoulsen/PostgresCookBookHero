class Api::V1::UsersController < ApplicationController
  # def create

  #   render json: params
  # end

  def login
    user = User.find_by(username: params[:username])
    if user == nil
      render json: {message: "Unknown username"}
    else
      render json: user, serialize: Api::V1::UserSerializer
    end
  end

  def signup
    new_user = User.find_by(username: params[:username])
    if new_user == nil
      new_user = User.create(name: params[:name], username: params[:username])
      render json: new_user, serialize: Api::V1::UserSerializer
    else
      render json: {message: "Username already taken"}
    end
  end

  def index
    render json: User.all, each_serializer: Api::V1::UserSerializer
  end

  def show
    user = User.find_by(id: params[:id])
    if user == nil
      render json: {message: "User does not exist"}
    else
      render json: user, serialize: Api::V1::UserSerializer
    end
  end
end #EOF
