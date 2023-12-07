import { decodeToken } from "react-jwt";

const CheckToken = () => {
    let token = localStorage.getItem("token");
    if (token) {
        const exp = decodeToken(token).exp;
        const nowDate = new Date();
        if (exp && Math.floor(nowDate.getTime() / 1000) > exp) {
            localStorage.removeItem("token");
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

export default CheckToken;