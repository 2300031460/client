
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Call the logout function passed as a prop
    navigate('/'); // Navigate to the login page after logout
    
  };

  return (
    <div
    style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
      >
      <h1 class='h'>Thank you for using our service!</h1>
      <button onClick={handleLogout} class='custom-button'>Login</button>
    </div>
  );
};

export default Logout;
