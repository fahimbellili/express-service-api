# express-service-api

The base URL of the API is : ```http://localhost:40000/api/v1```

Description : 
* This API allows us to CRUD city and url (JSON) related to car parks in this city to MongoDB.
* Choose a URL and load the map on a frontend.
* In MongoDB, a town record contains : townName and parkingUrl; all these fields are required.

To start the server, run the commande : ```npm run dev```

The following routes allow us to request the api and get results in JSON:
* ```/town``` : save a Town to database.
* ```/town/:id``` : update, delete or get one town.
* ```/town/all-towns``` : get all towns in database.

Note: 
* The pagination est very useful for improving rendering of a large JSON.
* The API does not support xml format.
