Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get "book/:isbn", to: 'books#book_detail'

  namespace :api do
    namespace :v1 do
      defaults format: :json do
        get "book/:isbn", to: 'books#book_detail'
        get "convert/:isbn", to: 'books#switch_isbn'
      end
    end
  end
end
