import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_BACKEND_ENDPOINT,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json', // Optional: Set default headers
        // Add any other headers you need here
      },
})