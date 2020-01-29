# Breweries Table of Contents 
Introduction
Author
Technologies Used
Setup
Sources
Project Status

# Introduction
This is the backend portion for a project that makes an API call for a list of breweries around the country. I chose to narrow it down to breweries in the state of Virginia. 

 An API call is made for breweries then written to file system called data.json. The raw data is then run through a schema model to get the specific data points needed to create the website. That data is then stored on a mongoose database to then be used later for the front end to then make an API call.  

# Author
Mamady Sillah 

# Technologies Used
Mongoose
MongoDB
Express
Node
Heroku

# Setup
To run this project, install it locally, cd into the file, and then in the command line type "npm start." This will display the data that was filtered through the schema. 

# Sources
API call https://www.openbrewerydb.org/

# Project Status
This backend has been completed. Any front end application can make an API call to my deployed website. 
