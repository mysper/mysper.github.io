import axios from 'axios';

export const postURL = axios.create({
    baseURL: 'https://websit-backend.herokuapp.com/'
});