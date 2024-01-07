import axios from 'axios';
import Cookies from 'universal-cookie';
export const cookies = new Cookies();

const PRODUCTION_SERVER_URL = 'https://nick-abramov-design-portfolio-server-roan.vercel.app';
const DEVELOPMENT_SERVER_URL = 'http://localhost:8080';
const baseURL = process.env.NODE_ENV == 'production' ? PRODUCTION_SERVER_URL : DEVELOPMENT_SERVER_URL;

const api = axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${cookies.get('access_token')}`,
  },
});

export default api;
