import LocationItem from "../LocationItem/LocationItem";
import { LocationObject, Locations } from "../models";
import classes from "./LocationsList.module.scss";

const LocationsList = ({ visibleLocations }: Locations) => {
  return (
    <div className={classes["list-container"]}>
      <ul className={classes.list}>
        {visibleLocations.map((location: LocationObject) => {
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
