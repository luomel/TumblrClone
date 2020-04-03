Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :show, :create]
    resource :session
    resources :posts, only: [:index, :create, :update, :show, :destroy]
  end
  #nesting users under api tag
  root to: "static_pages#root"
end
