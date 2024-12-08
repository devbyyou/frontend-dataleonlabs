/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? 'https://main.d5a6dzwfr66vb.amplifyapp.com/data' : '/data';
export const axiosInstance = axios.create({
  baseURL,
});
