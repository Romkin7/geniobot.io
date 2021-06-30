FROM node:alpine
WORKDIR /backend
COPY ./package.json ./
RUN npm install -g npm
RUN yarn
COPY ./ ./
CMD ["yarn", "start"]
