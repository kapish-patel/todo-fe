
import { NavLink } from "react-router-dom"
import './Identity.css'
import { useState } from "react"

function Resister() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegisterBtnClick = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    else {
      setError('');
      console.log('Passwords match');
    }

  }

  return (
    <div className="login-form-container">
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" onChange={(e) => {setUsername(e.target.value)}}/>

                <label htmlFor="username">Email:</label>
                <input type="email" id="email" name="email" onChange={(e) => {setEmail(e.target.value)}}/>

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={(e) => {setPassword(e.target.value)}}/>

                <label htmlFor="confirm-password">Confirm Password:</label>
                <input type="password" id="confirm-password" name="confirm-password" onChange={(e) => {setConfirmPassword(e.target.value)}}/>

                {error && <p style={{color: 'red'}}>{error}</p>}

                <button type="submit" onClick={handleRegisterBtnClick}>Register</button>
            </form>

            <p>Already have an account? <NavLink to='/login'>Login here</NavLink></p>
      </div>
      
  )
}

export default Resister
