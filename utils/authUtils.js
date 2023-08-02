import AsyncStorage from "@react-native-async-storage/async-storage";

const handleLogout = async (setUserAuthenticated) => {
  try {
    // Clear the authentication token from AsyncStorage or any state used for authentication
    await AsyncStorage.removeItem("auth_token");

    // Update the userAuthenticated state to false
    setUserAuthenticated(false);
  } catch (error) {
    console.error("Error logging out:", error);
  }
};


export {handleLogout}
