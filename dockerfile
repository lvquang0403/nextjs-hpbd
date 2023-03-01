FROM node:16.18

WORKDIR /usr/src/app/my-app

COPY package*.json ./
COPY . ./

RUN npm install -g npm@7.19.1
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]