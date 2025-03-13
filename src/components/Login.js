import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Auth.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8086/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Login response:', data);
        // Check if login was successful
        if (data.accessToken && data.roles.includes('ROLE_ADMIN')) {
          // Redirect to admin dashboard
          window.location.href = '/admin';
        } else if (data.accessToken) {
          // Redirect to user dashboard
          window.location.href = `/user-dashboard?username=${data.username}`;
        } else {
          // Handle login failure
          setErrorMessage(data.message);
        }
      })
      .catch(error => {
        console.error('Login error:', error);
        setErrorMessage('An error occurred while logging in.');
      });
  };

  console.log("Rendering Login component");

  return (
    <div  style={{
      width: "100%",
      height: "700px",
      backgroundImage:
      'url("https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      marginTop:"-20px"
      }}>
    <div className="auth-container" >
      <div className="auth-form" >
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <NavLink to="/signup">Signup</NavLink></p>
      </div>
    </div>
    </div>
  );
}

export default Login;
