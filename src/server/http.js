import axios from 'axios';
import { API_URL } from '../config';

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'content-type': 'application/json',
    accept: 'application/json',
  },
});

const http = {
  get(url, params) {
    return instance.get(url, { params });
  },
  post(url, data, headers) {
    return instance.post(url, data, { headers });
  },
  put(url, data, headers) {
    return instance.put(url, data, { headers });
  },
  delete(url) {
    return instance.delete(url);
  },
};

export default http;
