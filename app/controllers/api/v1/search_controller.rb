class Api::V1::SearchController < ApplicationController
  def index
    render json: birds
  end

  def ebird_url
    service.recent_birds
  end

  private

  def birds
    { birds: [
      {name: 'bird 1'},
      {name: 'bird 2'}
      ]
    }
  end

  def service
    @service ||= EBirdService.new(location_params)
  end

  def location_params
    params.permit(:lat, :long)
  end
end
