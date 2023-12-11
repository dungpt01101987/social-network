import { useState } from 'react';
import '../asscets/styles/FormLogin.scss';
import { useNavigate } from 'react-router-dom';
import { createAccount, createAccountVerifyOtp } from '../services/Auth';
import { toast } from 'react-toastify';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav';

const CreateAccount = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flg, setFlg] = useState(false);
    const [isshowPassword, setIsshowPassword] = useState(true);
    const [otp, setOtp] = useState("");

    const handleCreateAccount = async () => {
        let res = await createAccount(username, email, password);
        if (res && res.dataError) {
            toast.error(res.dataError);
        } else {
            setOtp(res.otp);
            setFlg(true);
        }
    }
    const handleCreateAccountVerifyOtp = async () => {
        let resNew = await createAccountVerifyOtp(username, otp);
        if (resNew && resNew.dataError) {
            toast.error(resNew.dataError);
        } else {
            toast.success(resNew.message);
            navigate("/login");
        }
    }
    return (
        <Container>
            <div className='login-container col-12 col-sm-4'>
                <div className='title'>Create Account</div>
                <div className='text'>Email</div>
                <input
                    type='text'
                    placeholder='Username ...'
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <input
                    type='text'
                    placeholder='Email ...'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
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
                <Nav defaultActiveKey="/login" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/login">Log In</Nav.Link>
                    </Nav.Item>
                </Nav>
                <button
                    className={email && username && password ? "active" : ""}
                    disabled={email && username && password ? false : true}
                    onClick={() => handleCreateAccount()}
                >
                    Get OTP
                </button>

                {
                    flg ?
                        (
                            <>
                                <div>Nhập OTP ({otp}): </div>
                                <input
                                    value={otp}
                                    onChange={(event) => setOtp(event.target.value)}
                                />
                                <button onClick={() => handleCreateAccountVerifyOtp()}>Verify OTP</button>
                            </>
                        )
                        :
                        (<></>)
                }
            </div >
        </Container>
    );
};

export default CreateAccount;
