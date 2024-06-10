import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Buttons from '../../components/buttons/Buttons.jsx';
import './login.css';

function Login (){
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errMsg, setErrMsg]= useState('');
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  const navigate = useNavigate();

  const handleUserInput = (e) => setUser(e.target.value)
  const handlePwdInput = (e) => setPwd(e.target.value)
  const handleRememberMe = (e) => setRememberMe(e.target.checked)

  useEffect (()=>{
    if (token) {
      navigate('/profile');
    }
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('data', user,pwd);
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          email: user, 
          password: pwd 
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.body.token;
        sessionStorage.setItem("token", token);
        console.log('token', token);
        if (rememberMe) {
          localStorage.setItem("token", token)
        }
        navigate('/profile');
      } else {
        const err = 'Email or Password incorrect'
        setErrMsg(err);
      }

    } catch (err) {
      console.error(err);
      setErrMsg('Error occurred')
    }  
  }

  return(
    <main className='main bg-dark'>
      <section className='sign-in-content'>
        <i className='fa fa-user-circle sign-in-icon' />
        <h1 className='sign-in-title'>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-wrapper'>
            <label htmlFor='username'>Username</label>
            <input 
            id='username' 
            type='email' 
            value={user}
            onChange={handleUserInput}  
            />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='password'>Password</label>
            <input 
            id='password' 
            type='password' 
            value={pwd}  
            onChange={handlePwdInput}
            />
          </div>
          <div className='input-remember'>
            <label htmlFor='remember-me'>Remember me</label>
            <input 
            id='remember-me' 
            type='checkbox'
            checked={rememberMe}
            onChange={handleRememberMe}
            />
          </div>   
          <Buttons 
          className='sign-in-button' 
          type='submit' 
          buttonName='Sign In'
          />  
          {errMsg && <p className='errMsg'>{errMsg}</p>}
        </form>    
      </section>
    </main>
  )
}
export default Login;

