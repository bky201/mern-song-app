import axios from 'axios';

const development = process.env.ENVIRONMENT === 'development';

let baseURL = "http://localhost:8000/api/"

if (!development)
    baseURL = "https://mern-song-app-aljd.onrender.com/api/"


export default axios.create({
    baseURL
});