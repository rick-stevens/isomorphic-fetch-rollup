import axios from 'axios';

export default async () => {
  const response = await axios('https://jsonplaceholder.typicode.com/todos/1');
  return response;
};
