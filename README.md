## Dependencies

*Backend*

* ruby 3.2.0
* Rails 7.0.4.2
* Bundler version 2.4.7

*Frontend*

* React 18.2.0
* Node v14.21.2
* Npm 6.14.17

## Configuration

* For initial configuration like setting up local environment (ruby and rails set-up) for testing purposes, this [link](https://gorails.com/setup/windows/10) provides a good information depends on the operating system installed in your work station.

## Application initialization

*Backend*

Run the ff commands inside project root directory to initialize the application
* `bundle install` - install/fetch needed gems
* `rails db:create` - create database
* `rails db:migrate` - initialize database tables 
* `rails db:seed` - runs the seeder

*Frontend*

Run the ff commands inside assessment_ui directory

* `npm install` - install dependencies

To run development server

* `rails server` - inside rails project root directory
* `npm start` - inside assessment_ui folder, run front-end development server

- Backend can be access through the link `http://localhost:3000`
- Frontend can be access through the link `http://localhost:3006`

## API Endpoints

Note: currently no authentication has been implemented
- Fetch book information -  `http://localhost:3000/api/v1/book/<isbn>` - get request - params: *isbn*
- Toggle ISBN - `http://localhost:3000/api/v1/convert/<isbn>` - get request - params: *isbn*


