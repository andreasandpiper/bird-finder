require "net/http"
require "uri"

class EBirdService
  attr_reader :lat, :long

  def initialize(params)
    @lat = params[:lat]
    @long = params[:long]
  end

  def fetch
    request
  end

  private

  def request
    uri = URI.parse(url)
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    request = Net::HTTP::Get.new(uri.request_uri)
    request['x-ebirdapitoken'] = Rails.application.credentials.ebird_key
    response = http.request(request)
    JSON.parse response.body
  end

  def url
    "https://ebird.org/ws2.0/data/obs/geo/recent?lat=#{lat}&lng=#{long}&dist=50"
  end
end
