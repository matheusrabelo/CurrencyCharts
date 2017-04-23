FROM node:boron

RUN	mkdir -p /currencychartsexternalapi
WORKDIR /currencychartsexternalapi

COPY . /currencychartsexternalapi
RUN npm install

EXPOSE 8088
CMD ["npm", "start"]
