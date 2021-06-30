FROM node:14.17.1-alpine3.13
WORKDIR /dashboard
COPY ./package.json ./
RUN npm install -g npm

CMD ["yarn", "start"]