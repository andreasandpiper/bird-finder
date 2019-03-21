Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api do
    namespace :v1 do
     get 'birds' => 'search#birds'
     post 'charge' => 'payment#charge'
    end
  end
end
