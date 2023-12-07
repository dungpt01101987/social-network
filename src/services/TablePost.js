import axios from "./CustomizeAxios";
const getTimeLine = (page) => {
    return axios.get(`/posts/time-line?currenPage=${page}&pageSize=3`);
}

export { getTimeLine }