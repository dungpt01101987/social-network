import axios from "./CustomizeAxios";
const getTimeLine = (page) => {
    console.log("CHeck axios: ", axios);
    return axios.get(`/posts/time-line?currenPage=${page}&pageSize=3`);
}

export { getTimeLine }