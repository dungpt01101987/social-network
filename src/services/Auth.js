import axios from "./CustomizeAxios";

const loginApi = (username, password) => {
    return axios.post("/auth/login", {
        "username": username,
        "password": password
    });
}

const verifyOtp = (username, otp) => {
    return axios.post("/auth/login/verify-otp", {
        "username": username,
        "otp": otp
    });
}

export { loginApi, verifyOtp }