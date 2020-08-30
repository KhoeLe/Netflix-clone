import axios from "axios";

// baseURL de dung cho API cua MTDB
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
})



export default instance;