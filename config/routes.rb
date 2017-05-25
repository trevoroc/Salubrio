Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i(create update)
    resource :session, only: %i(create destroy)
    resources :workouts, except: %i(new edit)
    resources :routes, only: %i(create index)
  end

  root 'static_pages#root'
end
