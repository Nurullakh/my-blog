import axios from 'axios';

export default axios.create({
  baseURL: `https://identitytoolkit.googleapis.com/v1/`,
  params: {
    key: 'AIzaSyAOKhUoCqv2R9j20bV92xw1uZmh7LpaJOA'
  }
});