import axios from "axios";

const request = axios.create({
    baseURL: "https://newsapi.org/v2/top-headlines?country=us&apiKey=0ae554c0211f47a7af85b019ebc63be2",
    timeout: 10000,
})
export default request;