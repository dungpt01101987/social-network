import { useState } from 'react';
import '../asscets/styles/FormLogin.scss';
import { useNavigate } from 'react-router-dom';
import { changePassword, newPassword } from '../services/Auth';
import { toast } from 'react-toastify';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [emailData, setEmailData] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const [flg, setFlg] = useState(false);
    const [isshowPassword, setIsshowPassword] = useState(true);

    const handleSendRequest = async () => {
        let res = await changePassword(emailData);
        if (res && res.dataError) {
            toast.error(res.dataError);
        } else {
            setToken(res.token);
            setFlg(true);
        }
    }
    const handleNewPassword = async () => {
        let resNew = await newPassword(token, emailData, password);
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
                <div className='title'>Change Password</div>
                <div className='text'>Email</div>
                <input
                    type='text'
                    placeholder='Email ...'
                    value={emailData}
                    onChange={(event) => setEmailData(event.target.value)}
                />
                <button
                    className={emailData ? "active" : ""}
                    disabled={emailData ? false : true}
                    onClick={() => handleSendRequest()}
                >
                    Send request change password
                </button>
                {
                    flg ?
                        (
                            <>
                                <input
                                    type='text'
                                    placeholder='Token'
                                    value={token}
                                    onChange={(event) => setToken(event.target.value)}
                                />
                                <input
                                    type='text'
                                    placeholder='Email ...'
                                    value={emailData}
                                    onChange={(event) => setEmailData(event.target.value)}
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
                                    className={token && emailData && password ? "active" : ""}
                                    disabled={token && emailData && password ? false : true}
                                    onClick={() => handleNewPassword()}
                                ></button>
                            </>
                        )
                        :
                        (<></>)
                }
            </div >
        </Container>
    );
};

export default ForgotPassword;
