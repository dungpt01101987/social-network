import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import '../asscets/styles/FormLogin.scss';
import { useNavigate } from 'react-router-dom';
import { loginApi, verifyOtp } from '../services/Auth';
import { toast } from 'react-toastify';
const FormLogin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isshowPassword, setIsshowPassword] = useState(true);
    const [isCheckOtp, setIsCheckOtp] = useState(false);
    const [otp, setOtp] = useState("");

    const handleLogin = async () => {
        let res = await loginApi(username, password);
        console.log(">>> Check res ", res);
        if (res && res.dataError) {
            toast.error(res.dataError);
            console.log(">>> Check res ", res);
        } else {
            setIsCheckOtp(true);
            setOtp(res.data.otp);
        }
    }

    const handleOtp = async () => {
        let resOtp = await verifyOtp(username, otp);
        console.log(">>> Check resOtp ", resOtp);
        if (resOtp && resOtp.dataError) {
            toast.error(resOtp.dataError);
            console.log(">>> Check res ", resOtp);
            return;
        } else {
            toast.success("Login successful!")
            localStorage.setItem("token", resOtp.data.token);
            navigate("/users");
        }
    }
    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            navigate("/");
        }
    })
    return (
        <div className='login-container col-12 col-sm-4'>
            <div className='title'>Login</div>
            <div className='text'>Username</div>
            <input
                type='text'
                placeholder='Username ...'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <div className='input-password'>
                <input
                    type={isshowPassword === true ? 'password' : 'text'}
                    placeholder='Password ...'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <FontAwesomeIcon
                    icon={isshowPassword === true ? faEyeSlash : faEye}
                    className='icon-eye-pass'
                    onClick={() => setIsshowPassword(!isshowPassword)}
                />
            </div>
            <button
                className={username && password ? "active" : ""}
                disabled={username && password ? false : true}
                onClick={() => handleLogin()}
            >
                Lấy mã OTP
            </button>
            {
                isCheckOtp ? (<>
                    <div>Nhập OTP ({otp}): </div>
                    <input
                        value={otp}
                        onChange={(event) => setOtp(event.target.value)}
                    />
                    <button onClick={() => handleOtp()}>Login</button>
                </>) : (<></>)
            }
        </div >

    );
};

export default FormLogin;
