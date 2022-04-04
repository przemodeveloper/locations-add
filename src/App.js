import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import LocationsList from "./LocationsList/LocationsList";
import classes from "./App.module.css";

const App = () => {
  const [locations, setLocations] = useState([]);
  const [start, setStart] = useState(0);

  const fetchLocations = useCallback(async (start) => {
    const headers = {
      withCredentials: true,
      username: "amitphatak$r5labs.com",
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    };

    const body = {
      start,
      limit: 3,
    };

    const locationsData = await axios.post("/locations", body, { headers });
    const { data } = locationsData;

    setLocations((prevState) => prevState.concat(data.locations));
  }, []);

  const addLocations = () => {
    setStart((prevState) => prevState + 3);
  };

  useEffect(() => {
    fetchLocations(start);
  }, [start, fetchLocations]);

  return (
    <div className={classes.container}>
      <LocationsList visibleLocations={locations} />
      <button onClick={addLocations}>Add</button>
    </div>
  );
};

export default App;
