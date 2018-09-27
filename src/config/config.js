export const ENV = 'PRODUCTION';
export const LOCAL_BASE_PATH = 'http://127.0.0.1:8000/api';
export const PROD_BASE_PATH = 'https://hartleyn.pythonanywhere.com/api';
export const BASE_PATH = (ENV === 'PRODUCTION') ? PROD_BASE_PATH : LOCAL_BASE_PATH;
