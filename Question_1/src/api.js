import axios from 'axios';

const API_URL = 'http://20.244.56.144/test/';

export const fPosts = async () => {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
};

export const fUsers = async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
};