import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080/api/v1/"
});

let token = localStorage.getItem("token");
if (token) {
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("token");
}

instance.interceptors.response.use(function (response) {
    return response.data ? response.data : { statusCode: response.status };
}, function (error) {
    let res = {};
    if (error.response) {
        res.dataError = error.response.data;
        res.status = error.response.status;
        res.headers = error.response.headers;
    }
    return res;
});

export default instance;