FROM node:alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

RUN chown -R node /usr/src/app

CMD ["node", "app.js"]
