import './Login.css';
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {updateLogin, updatePassword} from "../../features/login/login.slice.ts";

function Login() {

    const dispatch = useAppDispatch();

    const login = useAppSelector((state)=>state.login.login);
    const password = useAppSelector((state)=>state.login.password);

    console.log(password);
    function handleLoginChange(newLogin: string){
        dispatch(updateLogin(newLogin));
    }

    function handlePasswordChange(newPassword: string){
        dispatch(updatePassword(newPassword));
    }

    return (
        <div className="login">
            <h1 className='login__title'>LOGIN</h1>

            <form className="login__form" action="">
                <div className='form__group'>
                    <img className='form__img' src='/images/login/mail.svg' alt=""/>
                    <input className='form__field' id='login' type="email"
                           value={login}
                           onChange={(e) => handleLoginChange(e.target.value)}/>
                </div>
                <div className='form__group'>
                    <img className='form__img' src="/images/login/password.svg" alt=""/>
                    <input className='form__field' id='password' type="password"
                           value={password}
                           onChange={(e) => handlePasswordChange(e.target.value)}/>
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
