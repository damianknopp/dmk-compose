#!/bin/bash
image_name=angulardevelop
cmd="npm run lint"
sudo docker-compose run --entrypoint "${cmd}" $image_name
