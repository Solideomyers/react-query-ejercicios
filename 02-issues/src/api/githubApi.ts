import axios from 'axios';
import { envs } from '../config/envs/envs';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization: envs.TOKEN,
  },
});
