import { from } from 'env-var';

const env = from({
  BASE_URL: import.meta.env.VITE_BASE_URL,
});

export const envs = {
  BASE_URL: env.get('BASE_URL').required().asString(),
};
