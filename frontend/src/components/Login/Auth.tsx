import './Auth.css';
import {useAppSelector} from "../../app/hooks.ts";
import {submitTeacherAuth, updateLogin, updatePassword} from "../../features/login/auth.slice.ts";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../app/store.ts";

function Auth() {

    const dispatch: AppDispatch = useDispatch();

    const login = useAppSelector((state)=>state.auth.login);
    const password = useAppSelector((state)=>state.auth.password);

    function handleLoginChange(newLogin: string){
        dispatch(updateLogin(newLogin));
    }
    function handlePasswordChange(newPassword: string){
        dispatch(updatePassword(newPassword));
    }
    const handleSubmit = () => {
        console.log(login)
        console.log(password)

        if (login && password) {
            dispatch(submitTeacherAuth({ login, password }));
        } else {
            console.error('Login and password must be provided');
        }
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
                <button className='form__btn' type={'button'}
                        onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}

export default Auth
