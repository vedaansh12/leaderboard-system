
import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';
const BASE_URL = process.env.REACT_APP_API_BASE_URL;


export const getUsers = () => axios.get(`${API_BASE}/users`);
export const addUser = (name) => axios.post(`${API_BASE}/user`, { name });
export const claimPoints = (userId) => axios.post(`${API_BASE}/claim/${userId}`);
export const getHistory = () => axios.get(`${API_BASE}/history`);
