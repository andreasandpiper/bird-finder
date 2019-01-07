Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api do
    namespace :v1 do
     resources :search
     get 'ebird_url' => 'search#ebird_url'
    end
  end
end
