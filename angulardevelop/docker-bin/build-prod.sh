#!/bin/bash
image_name=angulardevelop
sudo docker-compose run --entrypoint "npm run build:prod" angulardevelop
