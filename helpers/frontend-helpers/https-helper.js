import axios from 'axios';

export const myAxios = axios.create({
  baseURL: process.env.DOMAIN
});

export function queryGenerator(queries) {
  let result = ['?'];
  for (const param in queries) {
    result.push(`${param}=${queries[param]}&`);
  }

  result = result.join('');
  return result.slice(0, result.length - 1);
}
