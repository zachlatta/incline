FROM node:0.11
MAINTAINER Zach Latta <zach@zachlatta.com>

WORKDIR /usr/src/app/

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app/
RUN npm install -g

ENTRYPOINT scraper
