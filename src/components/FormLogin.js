import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import '../asscets/styles/FormLogin.scss';
const FormLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isshowPassword, setIsshowPassword] = useState(false);
    return (
        <div className='login-container col-12 col-sm-4'>
            <div className='title'>Login</div>
            <div className='text'>Email or Username</div>
            <input
                type='text'
                placeholder='Email or username ...'
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
            <button
                className={email && password ? "active" : ""}
                disabled={email && password ? false : true}
            >
                Login
            </button>
        </div >

    );
};

export default FormLogin;
