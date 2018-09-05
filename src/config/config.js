export const ENV = 'PROD';
export const LOCAL_BASE_PATH = 'http://127.0.0.1:8000/api/v1';
export const PROD_BASE_PATH = 'http://hartleyn.pythonanywhere.com/api/v1';
export const BASE_PATH = (ENV === 'PROD') ? PROD_BASE_PATH : LOCAL_BASE_PATH;
