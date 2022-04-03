import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import LocationsList from "./LocationsList/LocationsList";
import classes from "./App.module.css";

const App = () => {
  const [visibleLocations, setVisibleLocations] = useState([]);
  const [visibleElementsNumber, setVisibleElementsNumber] = useState(0);
  const [allLocations, setAllLocations] = useState([]);

  const addLocations = useCallback(() => {
    if (visibleElementsNumber < allLocations.length) {
      setVisibleElementsNumber((prevState) => prevState + 3);
      setVisibleLocations(allLocations.slice(0, visibleElementsNumber + 3));
    }
  }, [visibleElementsNumber, allLocations]);

  useEffect(() => {
    const fetchLocations = async () => {
      const locationsData = await axios.get(
        "https://6246bd8e739ac8459191f7d5.mockapi.io/v2/confidence/locations"
      );

      const { data } = locationsData;
      setVisibleLocations(data.locations.slice(0, 3));
      setAllLocations(data.locations);

      setVisibleElementsNumber(data.locations.slice(0, 3).length);
    };

    fetchLocations();
  }, []);

  return (
    <div className={classes.container}>
      <LocationsList visibleLocations={visibleLocations} />

      <button onClick={addLocations}>Add</button>
    </div>
  );
};

export default App;
