import { decodeToken } from "react-jwt";

const CheckToken = () => {
    const token = localStorage.getItem("token");
    console.log(">>>>> Check Token: ", token);
    if (token) {
        const exp = decodeToken(token).exp;
        const nowDate = new Date();
        if (exp && Math.floor(nowDate.getTime() / 1000) > exp) {
            localStorage.removeItem("token");
            console.log(">>>>> Vao 1");
            return false;
        } else {
            console.log(">>>>> Vao 2");
            return true;
        }
    } else {
        console.log(">>>>> Vao 3");
        return false;
    }
}

export default CheckToken;