import { from } from 'env-var';

const env = from({
  TOKEN: import.meta.env.VITE_TOKEN,
});

export const envs = {
  TOKEN: env.get('TOKEN').required().asString(),
};
