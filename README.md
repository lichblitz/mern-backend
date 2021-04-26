# MERN Backend Nodejs service

ApiRest created for managing Movies/Series stored in a MongoDB.

## Steps to deploy
* Install MongoDB in the machine.
* Create a database called `mern`.
* Create a `.env` file with `DB_URL`varaible with the `mongoDB URL for mongoose`.
* (Optional) Add `PORT` to the environment file with the wanted PORT for the service.
* Run `npm i` to install dependencies.
* Run `npm start` to launch the service.

## App details
- Created with `express`, `nodeJS` and `mongoose`.
- Project structure is an aproach to the Clean Architecture concepts.
- Can add, load all and load by type movies stored in MongoDB.
- Can be integrated with [MERN Frontend](https://github.com/lichblitz/mern-frontend).
