# Angulardevelop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.

This project contains a sample app run within docker contaniner.  It demomstrates chrome debugging, linting, compiling, hot module reloading, lazy loaded routing, angular animations


## To setup
Install node modules on host. Docker containers will map to the node_modules directory.

    npm i
    
## To Run

    sudo docker-compose up

## Angular cli commands within a docker container

See commands in docker-bin

    cd docker-bin
    ./lint.sh
    ./test.sh
    ./build.sh
    ./build-prod.sh
    ./analyze.sh
    ./analyze-prod.sh
    ./run.sh
