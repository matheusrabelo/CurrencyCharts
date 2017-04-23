import process from 'process';
import dotenv from 'dotenv';

const configuration = dotenv.config().parsed;

export const CURRENCY_LAYER_API_URL =
    process.env.CURRENCY_LAYER_API_URL ||
    configuration.CURRENCY_LAYER_API_URL ||
    'http://apilayer.net/api';

export const CURRENCY_LAYER_API_TOKEN =
    process.env.CURRENCY_LAYER_API_TOKEN ||
    configuration.CURRENCY_LAYER_API_TOKEN ||
    '';

export const APPLICATION_PORT =
    process.env.EXTERNAL_API_PORT ||
    configuration.EXTERNAL_API_PORT ||
    '8088';
