
import './Identity.css'
import { Navigate, NavLink } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../Redux/slice/userSlice';
import { useSelector } from 'react-redux';


function Login() {
    const dispatch = useDispatch();

    const isLoggedin = useSelector((state) => state.user.isLoggedIn);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLoginBtnClick = (e) => {
        e.preventDefault();
        // check for validation
        if (!email || !password) {
            setError('Please fill in all the fields');
            return;
        }
        setError('');
        dispatch(userLogin({email:email, password:password}));
    }

    return (
        isLoggedin ? <Navigate to='/' /> :
        <div className="login-form-container">
            <form>
                <label htmlFor="username">Email:</label>
                <input type="email" id="email" name="email" onChange={(e) => {setEmail(e.target.value)}}/>

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={(e) => {setPassword(e.target.value)}}/>

                {error && <p style={{color: 'red'}}>{error}</p>}

                <button type="submit" onClick={handleLoginBtnClick}>Login</button>
            </form>

            <p>Don&apos;t have an account? <NavLink to='/register'>Register</NavLink></p>
        </div>
    );
}

export default Login
