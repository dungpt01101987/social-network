import axios from "./CustomizeAxios";
const getUserLoginInfo = () => {
    return axios.get("/user");
}

export { getUserLoginInfo }