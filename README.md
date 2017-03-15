# Express API Generator

An opinionated ExpressJs based REST API generator.

## Features
The generator produces a fully functional application that can be used as a starting point for build a RESTful API based
on [NodeJs](https://nodejs.org), [ExpressJs](http://expressjs.com) and [MongoDB](https://www.mongodb.com/).

The application generated has the following features:

  - Token based **Authentication** and **Authorization**
  - Full tested API endpoints with **CRUD** operations
  - Automatically generated API documentation
  

## Structure
The generate application structure looks as follows.
```
..
.
 |--config/                 # configuration settings 
 |--controllers/            # controllers based on models
 |--dal/                    # data access layer containing abstractions over models
 |--doc/                    # autogenerated documentation for API endpoints 
 |--lib/                    # utility library to do common tasks
 |--models/                 # the underlying models of the system
 |--routes/                 # REST-based API endpoints
 |--test/                   # tests for the entire code base
 |--.gitignore              # common file and folders to ignore by git
 |--app.js                  # the applications main entry point 
 |--package.json            # specifies modules/packages used in the app
 |--README.md               # an introductory text about the application
```

## Commands