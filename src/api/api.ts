import axios from 'axios';
import Cookies from 'universal-cookie';
export const cookies = new Cookies();

const baseURL = 'http://localhost:8080';

const api = axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default api;
