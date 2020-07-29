FROM node:14-alpine

WORKDIR /app

RUN apk add git bash

RUN npm install -g gatsby-cli \
    && gatsby telemetry --disable

COPY package.json .

RUN npm install

COPY . .

CMD ["gatsby", "develop", "-H", "0.0.0.0"]
