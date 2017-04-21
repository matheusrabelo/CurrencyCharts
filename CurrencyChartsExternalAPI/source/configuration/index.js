import dotenv from 'dotenv';

const configuration = dotenv.config().parsed;

export const CURRENCY_LAYER_API_URL =
    configuration.CURRENCY_LAYER_API_URL || '';
export const CURRENCY_LAYER_API_TOKEN =
    configuration.CURRENCY_LAYER_API_TOKEN || '';
export const APPLICATION_PORT =
    configuration.APPLICATION_PORT || '8088';
