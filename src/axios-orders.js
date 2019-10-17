import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-7b8d0.firebaseio.com/'
});

export default instance;