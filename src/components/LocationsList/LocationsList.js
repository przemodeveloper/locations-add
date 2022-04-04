import LocationItem from "../LocationItem/LocationItem";
import classes from "./LocationsList.module.css";

const LocationsList = ({ visibleLocations }) => {
  return (
    <div className={classes["list-container"]}>
      <ul className={classes.list}>
        {visibleLocations.map((location) => {
          return (
            <LocationItem
              key={location.id}
              details={location.locationDetails}
              type={location.locationType}
              address={location.address}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default LocationsList;
