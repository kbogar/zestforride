import axios from "axios";

axios.defaults.baseURL = 'https://zest-for-ride-bf40c62cc6cb.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;