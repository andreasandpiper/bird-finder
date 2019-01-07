class BirdPresenter
  attr_accessor :birds, :response

  def initialize(birds)
    @birds = birds
  end

  def most_common
    birds.sort_by { |b| b['howMany'].to_i}.reverse
  end
end
