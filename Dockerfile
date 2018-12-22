FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production
RUN npm install --no-save webpack webpack-cli webpack-merge webpack-node-externals clean-webpack-plugin ts-loader

COPY . .

RUN NODE_ENV=production npm run build

EXPOSE $PORT

CMD [ "npm", "start" ]
