class Api::V1::SearchController < ApplicationController
  def birds
    birds = BirdPresenter.new service.fetch
    render json: { birds: birds.most_common}
  end

  private

  def service
    @service ||= EBirdService.new(location_params)
  end

  def location_params
    params.permit(:lat, :long)
  end
end
