# Trancker

This is a Contribution Tracker app to track the various contribution in order to provide users with a record of all contributions and to
monitor how funds are being directed. The application also provides reports for financial
reporting purposes. Here is the web interface for [Trancker](http://github.com/ODINAKACHUKWU/trancker) application.

# Table of Contents

- [Getting Started](#Getting-Started "Goto Getting-Started")
- [Technology Stack](#Technology-Stack "Goto Technology-Stack")
- [Installation](#Installation "Goto Installation")

## Getting Started

This is a backend application that creates the API endpoints consumed by the frontend web application.

### API Endpoints

- GET /transactions
- POST /transactions
- GET /transactions/:id
- PATCH /transactions/:id
- PUT /transactions/:id
- DELETE /transactions/:id
- GET /report

## Technology Stack

- Ruby on Rails
- Postgresql

## Installation

1. Install Ruby on your machine.

2. Clone the repository.

3. Change directory into the root of the project directory.

4. Run `bundle install` on the terminal to install project dependecies.

5. Follow the instructions on database setup to configure the database.

6. Start the application: `rails s`.

## Database Setup

1. Install Postgres on your machine.

2. Create a `.env` file in the root of the project directory.

3. Copy the variables in the `.env.sample` file into the `.env` file and provide the required database credentials.

4. Run `rake db:setup` command to setup your database.

5. Run `rake db:seed` command to seed the database.
