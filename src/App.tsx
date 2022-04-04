import { useCallback, useEffect, useRef, useState } from "react";
import LocationsList from "./components/LocationsList/LocationsList";
import useFetch from "./hooks/useFetch";
import Loader from "./components/UI/Loader/Loader";
import classes from "./App.module.scss";
import { FaArrowDown } from "react-icons/fa";

const App = () => {
  const [start, setStart] = useState(0);
  const { loading, error, locations } = useFetch(start);

  const arrowRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setStart((prevState) => prevState + 3);
    }
  }, []);

  useEffect(() => {
    const current = arrowRef.current;
    const observer = new IntersectionObserver(handleObserver);
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [handleObserver]);

  return (
    <div>
      {!error ? (
        <div className={classes.container}>
          <LocationsList visibleLocations={locations} />
          <div ref={arrowRef}>
            <FaArrowDown />
          </div>
          {loading && <Loader />}
        </div>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default App;
