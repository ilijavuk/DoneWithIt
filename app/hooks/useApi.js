import { useState } from "react";

const useApi = (apiCall) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async (...payload) => {
    setIsLoading(true);
    const response = await apiCall(...payload);
    setIsLoading(false);
    setError(!response.ok);
    setData(response.data);
    return response;
  };

  return { data, error, isLoading, fetch: loadData };
};

export default useApi;
