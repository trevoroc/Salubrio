Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i(create update)
    resource :session, only: %i(create destroy)
  end

  root 'static_pages#root'
end
