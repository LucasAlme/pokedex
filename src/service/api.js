import axios from 'axios';
import { api as url } from '../utils/Constants'

const api = axios.create({
    baseURL: url
})

export default api;