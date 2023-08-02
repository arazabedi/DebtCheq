// state/UserContext.js
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  // Function to check authentication status
  const checkAuthentication = async () => {
    try {
      // Check if the authentication token exists in AsyncStorage
      const token = await AsyncStorage.getItem("auth_token");

      if (token) {
        // If the token exists, the user is authenticated
        return true;
      } else {
        // If the token does not exist, the user is not authenticated
        return false;
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
      // If there is an error, assume the user is not authenticated
      return false;
    }
  };

  useEffect(() => {
    // Call the checkAuthentication function when the app starts
    const fetchAuthenticationStatus = async () => {
      const isAuthenticated = await checkAuthentication();
      setUserAuthenticated(isAuthenticated);
    };

    fetchAuthenticationStatus();
  }, []);

  return (
    <UserContext.Provider value={{ userAuthenticated, setUserAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
