#!/bin/bash
image_name=angulardevelop
sudo docker-compose run --entrypoint "npm run lint" angulardevelop
