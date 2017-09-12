# dmk-compose
compose all the projects.  This project uses docker compose to start a nginx proxy, angular app and a node backend

## Setup
At the moment the docker containers do not contain npm modules, you will need to install them seperately.  This might not be the best approach, I am finding pros and cons between embedding and external mapped node modules.

    cd angulardevelop
    npm i
    cd swaggerdevelop
    npm i
    
## To run in development mode

Development mode contains hot module reloading

    cd nginx-gateway
    ./bin/app-develop-up.sh

## To run in production mode

Production contains gzip and aot compilation

    cd nginx-gateway
    ./bin/app-prod-up.sh
