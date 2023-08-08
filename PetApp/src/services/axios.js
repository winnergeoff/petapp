import axios from 'axios';

const BASE_ENDPOINT = 'http://10.0.0.192:5000/';
const BASE_URL = `${BASE_ENDPOINT}/api/v1`;

export default axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  withCredentials: true
});