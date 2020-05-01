FROM node:8
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY . /src/usr/app
RUN npm install
EXPOSE 4200
CMD ["npm", "start"]