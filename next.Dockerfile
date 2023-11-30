FROM node:alpine

RUN mkdir -p /usr/src/app
ENV PORT 9003

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

# Production use node instead of root
# USER node

RUN npm install

COPY . /usr/src/app

RUN npm run codegen

RUN npm run build

EXPOSE 9003
CMD [ "npm", "start" ]