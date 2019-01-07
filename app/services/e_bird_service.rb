require 'net/http'

class EBirdService
  attr_reader :lat, :long

  def initialize(params)
    @lat = params[:lat]
    @long = params[:long]
  end

  def recent_birds
    binding.pry
    key = Rails.application.credentials.ebird_key
  end

end
