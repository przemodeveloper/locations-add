import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const headers = {
  withCredentials: true,
  username: "amitphatak$r5labs.com",
  "Content-Type": "application/json",
  "Cache-Control": "no-cache",
};

const useFetch = (start: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [locations, setLocations] = useState([]);

  const fetchLocations = useCallback(async (start) => {
    try {
      setLoading(true);
      setError("");

      const body = {
        start,
        limit: 3,
      };

      const locationsData = await axios.post("/locations", body, { headers });
      const { data } = locationsData;

      setLocations((prevState) => prevState.concat(data.locations));
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchLocations(start);
  }, [start, fetchLocations]);

  return { loading, error, locations };
};

export default useFetch;
