import './Login.css';

function Login() {
    return (
        <div className="login">
            <h1 className='login__title'>LOGIN</h1>

            <form className="login__form" action="">
                <div className='form__group'>
                    <img className='form__img' src='../../../public/login/mail.svg' alt=""/>
                    <input className='form__field' id='login' type="email"/>
                </div>
                <div className='form__group'>
                    <img className='form__img' src="../../../public/login/password.svg" alt=""/>
                    <input className='form__field' id='password' type="password"/>
                </div>
                <button className='form__btn'>Login</button>
            </form>
        </div>
    )
}

export default Login
