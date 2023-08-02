import { useState, useEffect } from "react";
import axios from "axios";


//Fetch data from cheque collection
const UseFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsloading(true);

    try {
      const response = await axios.get("http://192.168.0.82:3000/api/cheques");
      setData(response.data);
      setIsloading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

	const refetch = () => {
		setIsloading(true)
		fetchData();
	}

  return { data, isLoading, error, refetch };
};

export default UseFetch;
