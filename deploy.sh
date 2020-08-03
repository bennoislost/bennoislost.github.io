#!/usr/bin/env bash

set -ex

docker-compose build --build-arg git_user="$(git config user.name)" --build-arg git_email="$(git config user.email)" && docker-compose run --rm console npm run deploy
