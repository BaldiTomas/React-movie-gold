import axios from 'axios';

export default axios.create({
    baseURL:'https://04ae-181-230-107-66.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});