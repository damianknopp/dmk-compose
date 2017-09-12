#!/bin/bash
image_name=angulardevelop
cmd="npm run analyze:build"
sudo docker-compose run --entrypoint "${cmd}" $image_name
