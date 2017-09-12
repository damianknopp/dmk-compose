#!/bin/bash
image_name=angulardevelop
cmd="npm run test"
sudo docker-compose run --entrypoint "${cmd}" $image_name
