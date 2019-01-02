class Api::V1::SearchController < ApplicationController
  def index
    render json: birds
  end

  private

  def birds
    { birds: [
      {name: 'bird 1'},
      {name: 'bird 2'}
      ]
    }
  end
end
