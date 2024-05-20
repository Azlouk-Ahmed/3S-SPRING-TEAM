import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchData = (API) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(API);
            setData(response.data);
            setLoading(false);
            setError(false);
        } catch (error) {
            console.error('Error data:', error);
            setLoading(false);
            setError(error.message);
        }
      };
        fetchData();
    }, [API]);

    return {data,loading,error}
}