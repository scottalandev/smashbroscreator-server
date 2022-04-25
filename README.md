# Super Smash Bros. Ultimate Character Creator Server

## Introduction

This project, in early development, is the backend code for a web-based single page app for the creation of complete movesets of new/proposed/imagined characters for the Nintendo Switch Fighting Game ***Super Smash Bros. Ultimate*** (SSBU). My 8-year-old son loves to imagine new characters he'd include in the game, and so I began developing this app to help him with his creativity process, and as a self-exercise for advancing my skills at integrating Typescript into React and utilizing PostgreSQL as database for a RESTful API.

The project is not yet deployed though a domain has been obtained at [smashbroscreator.com](https://smashbroscreator.com/). The uncompiled frontend React source code can be found in the [smashbroscreator-reactts](https://github.com/scottalandev/smashbroscreator-reactts/) public repo on github. 

## Project Info

This repo is a server and RESTful API for sending/receiving data between a PostgreSQL database and a React frontend client. The API is built with Express/node.js and connects the client to a set of CRUD endpoints for created character data. 

The entrypoint is **index.js**, and perusing that file will expose the user to the key endpoints and the general structure of the server.

The frontend code will be housed in a **/react-build** directory when ready for preliminary deployment. That code, having been compiled by the `build` script of [Create React App](https://github.com/facebook/create-react-app) into a static package of minified/uglified files, is not human-readable. The uncompiled frontend React source code can be found in the [smashbroscreator-reactts](https://github.com/scottalandev/smashbroscreator-reactts/) public repo on github.

This server application will both serve the static client files to the browser and act as API between client/database.

## To Run

Clone this git repository, run `npm install` to install dependencies, and `npm start` to launch a local development server at [http://localhost:5000](http://localhost:5000). Visiting that address will serve up the static React build found in the **/react-build** directory, once that directory is populated.

The server is setup to look for a PostgreSQL database on port:5432. There is properly formatted JSON data in **/seedData** which could be used to seed a database with appropriate content. The database file structure is not included in this directory: during development a local PostgreSQL instance was run with the seed data referenced above, and there will be a live PostgreSQL instance running on the deployment server.

## Development Plans

This app is under ongoing development and is not yet deployed. As of now, connection between client and API has basic but incomplete functionality. First deployment should allow for creation, saving, and viewing of characters, but likely not the updating/editing of characters already saved. Future development plans include user profiles, a publishing/sharing system, the ability to export or otherwise save characters externally, and more.

## Contact

This app is under solo development by full stack developer Scott Alan. Please reach out to him at [scottalandev@gmail.com](mailto:scottalan@gmail.com) with questions/comments.