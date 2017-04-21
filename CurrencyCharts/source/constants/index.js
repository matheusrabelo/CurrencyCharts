import process from 'process';

export const EXTERNAL_API = process.env.EXTERNAL_API || 'http://localhost:8088/v1';

// redux constants
export const LOAD_CURRENCIES_SUCCESS = 'LOAD_CURRENCIES_SUCCESS';
export const LOAD_HISTORY_SUCCESS = 'LOAD_HISTORY_SUCCESS';
