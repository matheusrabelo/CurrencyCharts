FROM node:boron

RUN mkdir -p /currencycharts
WORKDIR /currencycharts

COPY . /currencycharts
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
