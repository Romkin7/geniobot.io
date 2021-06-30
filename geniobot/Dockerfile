FROM node:14.17.1-alpine3.13
WORKDIR /geniobot
COPY ./package.json ./
RUN npm install -g npm
RUN yarn
COPY ./ ./
CMD ["yarn", "start"]
