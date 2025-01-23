FROM node:14.18

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "start"]
