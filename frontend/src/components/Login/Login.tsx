import './Login.css';

function Login() {
    return (
        <div className="login">
            <h1 className='login__title'>LOGIN</h1>

            <form className="login__form" action="">
                <div className='form__group'>
                    <img className='form__img' src='../../../public/images/login/mail.svg' alt=""/>
                    <input className='form__field' id='login' type="email"/>
                </div>
                <div className='form__group'>
                    <img className='form__img' src="../../../public/images/login/password.svg" alt=""/>
                    <input className='form__field' id='password' type="password"/>
                </div>
                <div className="form__group remember">
                    <input className='form__remember' id='remember' type="checkbox"/>
                    <label htmlFor="remember">Remember me</label>
                </div>
                <button className='form__btn'>Login</button>
            </form>
        </div>
    )
}

export default Login
