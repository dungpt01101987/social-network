import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import '../asscets/styles/FormLogin.scss';
import { useNavigate } from 'react-router-dom';
import { loginApi, verifyOtp } from '../services/Auth';
import { toast } from 'react-toastify';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';


const FormLogin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isshowPassword, setIsshowPassword] = useState(true);
    const [isCheckOtp, setIsCheckOtp] = useState(false);
    const [otp, setOtp] = useState("");

    const handleLogin = async () => {
        let res = await loginApi(username, password);
        if (res && res.dataError) {
            toast.error(res.dataError);
        } else {
            setIsCheckOtp(true);
            setOtp(res.otp);
        }
    }

    const handleOtp = async () => {
        let resOtp = await verifyOtp(username, otp);
        console.log(">>> Check resOtp ", resOtp);
        if (resOtp && resOtp.dataError) {
            toast.error(resOtp.dataError);
            return;
        } else {
            toast.success("Login successful!")
            localStorage.setItem("token", resOtp.token);
            localStorage.setItem("username", username);
            localStorage.setItem("avatar", null);
            navigate("/");
        }
    }
    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            navigate("/");
        }
    })
    return (
        <Container>
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
                <Nav defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/change-password">Forgot password</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/register">Create account</Nav.Link>
                    </Nav.Item>
                </Nav>
                <button
                    className={username && password ? "active" : ""}
                    disabled={username && password ? false : true}
                    onClick={() => handleLogin()}
                >
                    Get OTP
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
        </Container>
    );
};

export default FormLogin;
