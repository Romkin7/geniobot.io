FROM node:alpine
WORKDIR /backend
COPY ./package.json ./
RUN npm install -g npm
RUN npm install nodemon rimraf dotenv -g
CMD ["yarn", "start"]
