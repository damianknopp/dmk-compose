# dmk-compose
compose all the projects.  This project using docker compose to start a nginx proxy, angular app and node backend

## To run in development mode

Development mode contains hot module reloading

    cd nginx-gateway/bin
    ./app-develop-up.sh

## To run in production mode

Production contains gzip and aot compilation

    cd nginx-gateway/bin
    ./app-prod-up.sh
