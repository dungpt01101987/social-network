import '../asscets/styles/FormLogin.scss';
const FormLogin = () => {

    return (
        <div className='login-container col-12 col-sm-4'>
            <div className='title'>Login</div>
            <div className='text'>Email or Username</div>
            <input type='text' placeholder='Email or username ...' />
            <input type='password' placeholder='Password ...' />
            <button>Login</button>

        </div >

    );
};

export default FormLogin;
