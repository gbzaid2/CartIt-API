FROM node:12.13.1
WORKDIR /usr/src/app
COPY . .
RUN npm install
CMD node server/routes.js