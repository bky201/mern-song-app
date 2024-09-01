import axios from 'axios';

const development = !process.env.ENVIRONMENT || process.env.ENVIRONMENT === 'development';

let baseURL = "http://localhost:8000/api/"

if (!development)
    baseURL = "https://basicsongsdirectorywebapi.websites.net/api/songs"


export default axios.create({
    baseURL
});