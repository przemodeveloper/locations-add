import { useCallback, useEffect, useRef, useState } from "react";
import LocationsList from "./components/LocationsList/LocationsList";
import classes from "./App.module.css";
import { ArrowDown } from "@carbon/icons-react";
import useFetch from "./hooks/useFetch";
import Loader from "./components/UI/Loader/Loader";

const App = () => {
  const [start, setStart] = useState(0);
  const { loading, error, locations } = useFetch(start);

  const arrowRef = useRef();

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setStart((prevState) => prevState + 3);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver);
    if (arrowRef.current) observer.observe(arrowRef.current);
  }, [handleObserver]);

  return (
    <div>
      {!error ? (
        <div className={classes.container}>
          <LocationsList visibleLocations={locations} />
          <div ref={arrowRef}>
            <ArrowDown size={32} />
          </div>
          {loading && <Loader />}
        </div>
      ) : (
        <p>{error?.message}</p>
      )}
    </div>
  );
};

export default App;
