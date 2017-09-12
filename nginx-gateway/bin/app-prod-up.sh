#!/bin/bash

sudo rm -rf dist && pushd ../angulardevelop && \
    ./docker-bin/build-prod.sh && popd && sudo cp -R ../angulardevelop/dist .
sudo docker-compose -f docker-compose.prod.yml up
