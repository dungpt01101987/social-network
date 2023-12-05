import axios from "./CustomizeAxios";
const getTimeLine = () => {
    return axios.get("/posts/time-line?currenPage=0&pageSize=10");
}

export { getTimeLine }