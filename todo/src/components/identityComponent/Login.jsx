
import './Identity.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';


function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLoginBtnClick = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    }


    return (
        <div className="login-form-container">
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" onChange={(e) => {setUsername(e.target.value)}}/>

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
