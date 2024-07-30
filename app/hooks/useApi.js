import { useEffect, useState } from "react";

const useApi = ({ apiCall }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async () => {
    setIsLoading(true);
    const response = await apiCall();
    setIsLoading(false);
    if (!response.ok) return setError(true);

    setData(response.data);
    return setError(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return { data, error, isLoading, refetch: loadData };
};

export default useApi;
