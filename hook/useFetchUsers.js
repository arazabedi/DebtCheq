import { useState, useEffect } from "react";
import axios from "axios";

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get("http://192.168.0.82:3000/api/users/all/");
      setUsers(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const refetchUsers = () => {
    setIsLoading(true);
    fetchUsers();
  };

  return { users, isLoading, error, refetchUsers };
};

export default useFetchUsers;
