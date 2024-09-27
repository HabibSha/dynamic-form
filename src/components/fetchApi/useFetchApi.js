import { useEffect, useState } from "react";

const useFetchApi = (url, cb) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  console.log(url);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const result = await res.json();
      if (cb) {
        setData(cb(result));
      } else {
        setData(result);
      }
      setLoading(false);
      setError("");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return {
    data,
    loading,
    error,
  };
};

export default useFetchApi;
