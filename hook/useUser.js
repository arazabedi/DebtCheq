import { useContext } from "react";
import { UserContext } from "../state/UserContext";

// You can access authentication state from the UserContext.js
// through this hook
const useUser = () => {
  const { userAuthenticated, setUserAuthenticated } = useContext(UserContext);
  return { userAuthenticated, setUserAuthenticated };
};

export default useUser;
