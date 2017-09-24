#!/bin/bash

rm -rf dist && pushd ../angulardevelop && \
    ./docker-bin/build-prod.sh && popd && cp -R ../angulardevelop/dist .
docker-compose -f docker-compose.prod.yml up
