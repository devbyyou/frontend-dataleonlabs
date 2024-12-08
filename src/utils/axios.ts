/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? '/' : '/data';
export const axiosInstance = axios.create({
  baseURL,
});
