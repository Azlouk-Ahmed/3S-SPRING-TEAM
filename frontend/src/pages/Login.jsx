import React, { useState } from 'react';
import axios from 'axios';
import "./login.css";
import { useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { CiLock } from 'react-icons/ci';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/admin/login', { email, password });

      console.log(response);
      
      const {admin } = response.data;

      console.log('Login successful:', admin);
      if(!admin) {
        setError("email not found !")
      }else {
        localStorage.setItem('admin', JSON.stringify(admin));
        navigate('/admin/page');
      }
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred during login');
    }
  };

  return (
    <form className="adminlogin" onSubmit={handleSubmit}>
      <div className="screen-1 box">
        <div className="email mt">
          <div className="blur"></div>
          <label htmlFor="email">Email Address</label>
          <div className="sec-2 df">
            <MdEmail className='f1'/>
            <input 
              type="email" 
              name="email" 
              placeholder="Username@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>
        </div>
        <div className="password">
          <div className="blur"></div>
          <label htmlFor="password">Password</label>
          <div className="sec-2 df">
            <CiLock className='f1' />
            <input 
              className="pas" 
              type="password" 
              name="password" 
              placeholder="············"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
            <ion-icon className="show-hide" name="eye-outline" />
          </div>
        </div>
        {error && <div className="error">{error}</div>}

        <button className="btn w-100" type="submit">Login</button>
      </div>
    </form>
  );
}

export default Login;
