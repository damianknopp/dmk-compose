#!/bin/bash
image_name=angulardevelop
docker-compose run --entrypoint "npm run build:prod" angulardevelop
