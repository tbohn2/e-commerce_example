# E-commerce Example

## Description

This application is an example of an e-commerce back end. GET, POST, PUT, and DELETE requests are sent by a user, which are then handled and complete the respetive request in the database. The database in this example is called ecommer_db with a table for products, tags, and categories. These tables are associated with each other: a product beolongs to a category and to many tags; tags belong to many products; a category has many products. The requests sent by a user allow for database manipulation using the package sequelize executed with the following methods: findAll, findByPk, create, update, and destroy.

## Installation

To install dependencies, open the terminal and run 'npm i'. The following packages are required for the application to work.

Node.js must be installed for application to function. Instructions can be found at https://nodejs.org/en/download for download.

MySQL2 must be installed following instructions at https://www.npmjs.com/package/mysql2 for access to database.

Express.js must be installed following instructions at https://expressjs.com/en/starter/installing.html for server functionality.

dotenv must be installed (https://www.npmjs.com/package/dotenv) in addidtion to Sequelize (https://www.npmjs.com/package/sequelize) for access to MySQL2 functionality and database. 

## Usage

This application is an example of an e-commerce back end. To test the functionality, an application such as Insomnia must be used to send requests to the server.
Input 'node server.js' in the terminal to initiate server before sending requests.

## License
  
N/A

## Repository URL and Demo

https://github.com/tbohn2/e-commerce_example

https://drive.google.com/file/d/1h5LiJfYFB1ZZvhjG9yYpCxEuGT4dbrLq/view?usp=sharingLinks 
