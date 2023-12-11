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

const changePassword = (email) => {
    return axios.get(`/auth/change-password/${email}`);
}

const newPassword = (token, email, passowrd) => {
    return axios.patch("/auth/new-password", {
        "token": token,
        "email": email,
        "password": passowrd
    });
}

const createAccount = (username, email, passowrd) => {
    return axios.post("/auth/register", {
        "username": username,
        "email": email,
        "password": passowrd
    });
}

const createAccountVerifyOtp = (username, otp) => {
    return axios.post("/auth/register/verify-otp", {
        "username": username,
        "otp": otp
    });
}

export { loginApi, verifyOtp, changePassword, newPassword, createAccount, createAccountVerifyOtp }