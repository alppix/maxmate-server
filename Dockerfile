FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production

COPY . .

RUN NODE_ENV=production npm run build

EXPOSE $PORT

CMD [ "npm", "start" ]
