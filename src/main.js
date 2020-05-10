import 'isomorphic-fetch';

export default async () => {
  const response = await global.fetch('https://jsonplaceholder.typicode.com/todos/1');
  const result = await response.json();
  return result;
};
