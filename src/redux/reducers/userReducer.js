import { FETCH_USER_LOGIN, FETCH_USER_ERROR, FETCH_USER_SUCCESS, USER_LOGOUT } from "../actions/userAction";

const INITIAL_STATE = {
    account: {
        username: '',
        auth: null,
        token: ''
    }
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN:
            return {
                ...state,
            };
        case FETCH_USER_ERROR:
            return {
                ...state,
                account: {
                    auth: false
                }
            };
        case FETCH_USER_SUCCESS:
            console.log(">>> CHeck action.data: ", action.data);
            return {
                ...state,
                account: {
                    username: action.data.username,
                    auth: true,
                    token: action.data.token
                },
            };
        case USER_LOGOUT:
            localStorage.removeItem('username');
            localStorage.removeItem('token');
            return {
                ...state,
                account: {
                    username: '',
                    auth: false,
                    token: ''
                }
            };
        default:
            return state;
    }
}

export default userReducer;