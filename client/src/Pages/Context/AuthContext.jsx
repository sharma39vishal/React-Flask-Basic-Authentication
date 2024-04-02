import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [userdata, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await axios.get('/api/profile/userdata', {
        withCredentials: true,
      });
      setUser(response.data);
    } catch (error) {
      setUser({});
      console.error('Error fetching user data:', error);
    }
  };

  const logout = async () => {
    try {
      await axios.get('/api/auth/logout', {
        withCredentials: true,
      });
      setUser({});

    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ userdata, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
