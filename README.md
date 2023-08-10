
# SERVERLESS, SERVICES AWS AND API SWAPI

A brief description of what this project does and who it's for

## Installation
You can find the code in the src file.

The folders have been structured based on the repository design pattern, the services, models and repository folders have been created. In the same way, two additional config folders have been created where you have the configuration of the tables and the swapi path, and finally the public folder where the handles of each one are found for the invocations.

A crud has been created using the Serverless framework with AWD services (Lambda, api gateway and DynamoDB) and other additional ones configuring access with IAM.

## Installation
You can run the project on your local, the first step is to install the dependencies with __'npm install'__, then you will configure and give the privileges to the AWS console and configure your environment by entering your __AWS_ACCESS_KEY_ID__ and __AWS_SECRET_ACCESS_KEY__ and finally run the command __npm run dev__

When executing it will raise a dev environment with the serverless-offline

## ENDPOINTS

Things to keep in mind when testing

1. __BASE_URL:__ _https://omhxvb1do4.execute-api.us-west-2.amazonaws.com_
2. __UID:__ _this is a unique id of a pokemon in DynamoDB_


To validate the starwars endpoint, you must enter the following route __BASE_URL/planets/ID_SWAPI__ , to avoid making constant queries it is stored in a table called planet_table where the information is stored and if it exists it shows the data entered, but if it does not find the information send to the service to obtain the data and then save in the created table.

- GET: __BASE_URL/planets/{id}__

The following endpoints have been created to maintain the pokemon table

- GET         : __BASE_URL/pokemons__
- GET          : __BASE_URL/pokemon/{pokemonId}__
- POST       : __BASE_URL/pokemons__
- PUT          : __BASE_URL/pokemons/{pokemonId}__
- DELETE  : __BASE_URL/pokemons/{pokemonId}__

Body content:
```
{
    "name": "Pichu",
    "type" : "Rayo",
    "evolution" : "Pikachu"
}
```

Colletions in postman: https://api.postman.com/collections/1026702-eb1c5d2b-be5c-45f2-a750-99c5a84c426e?access_key=PMAT-01H7GC1108D57ZJP40GR6EA97C

## DEPLOY
to deploy execute the command __npm run deploy__

## AWS services used
- Lambda
- API Gateway
- DynamoDB