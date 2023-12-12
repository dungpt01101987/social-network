import { verifyOtp } from '../../services/Auth';
import { toast } from 'react-toastify';

export const FETCH_USER_LOGIN = 'FETCH_USER_LOGIN';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const USER_LOGOUT = 'USER_LOGOUT';

export const USER_REFRESH = 'USER_REFRESH';

export const handLoginRedux = (username, otp) => {
    return async (dispatch, getState) => {
        dispatch({ type: FETCH_USER_LOGIN });

        let resOtp = await verifyOtp(username, otp);
        console.log(">>> CHeck resOtp: ", resOtp);
        if (resOtp && resOtp.dataError) {
            toast.error(resOtp.dataError);
            dispatch({
                type: FETCH_USER_ERROR
            });

        } else {
            toast.success("Login successful!")
            localStorage.setItem("token", resOtp.token);
            localStorage.setItem("username", username);
            dispatch({
                type: FETCH_USER_SUCCESS,
                data: {
                    username: username,
                    token: resOtp.token
                }
            });
        }
    }
}