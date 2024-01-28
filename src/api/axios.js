import axios from 'axios'; // axios module 불러오기

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "9b437a0f54f9c2c6140036d8c9d453b1",
        language: "ko-kr"
    }
});

export default instance;