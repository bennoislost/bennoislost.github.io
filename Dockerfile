FROM node:14-alpine

WORKDIR /app

RUN apk add git bash

RUN npm install -g gatsby-cli \
    && gatsby telemetry --disable
