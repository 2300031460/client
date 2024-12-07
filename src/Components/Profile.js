
import React, { useEffect, useState } from 'react';

const Profile = ({ savedBooks = [] }) => {
  const [username, setUsername] = useState('');

  // Fetch the username from localStorage when the component mounts
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div style={{ minHeight: '100vh', padding: '16px', textAlign: 'center', backgroundColor: '#F3F4F6' }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Profile</h1>
      <div style={{
        display: 'inline-block',
        backgroundColor: '#FFF',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ margin: '10px 0', color: '#555' }}>Username: {username || 'Loading...'}</h2>
        <h3 style={{ margin: '10px 0', color: '#888' }}>
          Books Saved: {savedBooks.length}
        </h3>
      </div>
    </div>
  );
};

export default Profile;
