FROM node:latest as builder
MAINTAINER Jakub Chmielewski
RUN mkdir /app3
WORKDIR /app3
COPY package.json /app3
RUN npm --legacy-peer-deps install
COPY . .
EXPOSE 3000
ENTRYPOINT [ "npm", "start" ]
