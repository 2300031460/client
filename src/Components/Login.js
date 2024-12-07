import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Initialize navigate function

  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve username and password from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Check if the entered username and password match the stored ones
    if (username === storedUsername && password === storedPassword) {
      onLogin(); // Call the onLogin prop to signal successful login
    } else {
      alert('Invalid username or password');
    }
  };

  // Navigate to the register page
  const navigateToRegister = () => {
    navigate('/register');  // Navigate to register page
  };

  return (
    <div
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',  // Full page height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ padding: '5px', width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ padding: '5px', width: '100%' }}
            />
          </div>
        </form>

        {/* Register and Login buttons in a row */}
        <div style={styles.buttonContainer}>
          <button onClick={navigateToRegister} style={{ ...styles.button, marginRight: '10px' }}>
            Register
          </button>
          <button onClick={handleSubmit} style={styles.button}>Login</button>
        </div>
      </div>
    </div>
  );
};

// Styles for buttons and container
const styles = {
  button: {
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    width: '120px',
    marginTop: '10px',
    transition: 'background-color 0.3s',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
};

export default Login;