import axios from 'axios';
// Пока у нас нет своего апи, используем это
export default axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`
});