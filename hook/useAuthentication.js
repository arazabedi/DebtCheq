// Despite the  name, this file gives you the userId (useUser gives you authentication status for login/logout purposes)
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

const useAuthentication = () => {
  const [userId, setUserId] = useState(null);
  const [decodedToken, setDecodedToken] = useState(null);

  const checkAuthentication = async () => {
    try {
      const token = await AsyncStorage.getItem('auth_token');
      const decodedToken = jwtDecode(token);
      const user = decodedToken;
      setUserId(user.userId);
      setDecodedToken(decodedToken);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  return { userId, decodedToken };
};

export default useAuthentication;
