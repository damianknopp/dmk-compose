#!/bin/bash
image_name=swaggerdevelop
sudo docker-compose run --entrypoint "npm run test" $image_name