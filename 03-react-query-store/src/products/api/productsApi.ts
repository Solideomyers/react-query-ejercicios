import axios from 'axios';
import { envs } from '../../config/envs';

const productsApi = axios.create({
  baseURL: envs.BASE_URL,
});

export { productsApi };
