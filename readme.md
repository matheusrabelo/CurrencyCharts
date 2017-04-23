# Currency Charts

## About
See the historical values of the main currencies.

## How to use
The following environment variables are necessary to configure this project:
* **EXTERNAL_API** default value: http://localhost:8088/v1
* **EXTERNAL_API_PORT** default value: 8088
* **CURRENCY_LAYER_API_URL** default value: http://apilayer.net/api
* **CURRENCY_LAYER_API_TOKEN** default value: ""

The last three you can also configure via .env file in CurrencyChartsExternalAPI folder.

After this, you can just clone this repo and go to CurrencyChartsExternalAPI folder. Install all dependencies, using:
```bash
$ npm install
```
And finally, run the project with:
```bash
$ npm run start
```

Do the same (install and start) for CurrencyCharts folder.

## Run with docker
In the front-end app (CurrencyCharts), you can use:
```bash
$ docker run -p 3000:3000 
             -e EXTERNAL_API=http://localhost:8088/v1
             <container_name>
```

In the back-end app (CurrencyChartsExternalAPI):
```bash
$ docker run -p 8088:8088 
             -e CURRENCY_LAYER_API_URL=http://apilayer.net/api 
             -e CURRENCY_LAYER_API_TOKEN=<your_apilayer_token> 
             -e EXTERNAL_API_PORT=8088 
             <container_name>
```

## How to test
Go to CurrencyCharts or CurrencyChartsExternalAPI folder and run:
```bash
$ npm run test
```

You can also see the test coverage with:
```bash
$ npm run coverage
```

PS.: The results should be on coverage/lcolv-report/index.html.

## Technologies
This is a complete React and Redux application

## License
MIT

## Author
Matheus Freire Rabelo
