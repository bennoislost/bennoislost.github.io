FROM node:14-alpine

WORKDIR /app

ARG git_email
ENV GIT_EMAIL ${git_email:-user@example.org}
ARG git_user
ENV GIT_USER ${git_user:-guest}

RUN apk add git openssh bash

RUN git config --global user.email ${GIT_EMAIL} \
    && git config --global user.name ${GIT_USER}

RUN npm install -g gatsby-cli \
    && gatsby telemetry --disable

COPY package.json .

RUN npm install

COPY . .

CMD ["gatsby", "develop", "-H", "0.0.0.0"]
