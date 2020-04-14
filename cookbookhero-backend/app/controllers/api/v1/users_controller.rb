class Api::V1::UsersController < ApplicationController
  def create
    render json: params
  end

  def index
    render json: User.all, each_serializer: Api::V1::UserSerializer
  end

  def show
  end
end
