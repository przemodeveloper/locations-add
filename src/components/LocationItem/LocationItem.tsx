import { LocationItemModel } from "../models";
import classes from "./LocationItem.module.scss";

const LocationItem = ({ details, type, address }: LocationItemModel) => {
  return (
    <li className={classes.item}>
      <h1>{type}</h1>
      <h2>{details}</h2>
      <ul>
        {Object.values(address!).map((val, i) => {
          if (val) {
            return <li key={i}>{val}</li>;
          }
          return null;
        })}
      </ul>
    </li>
  );
};

export default LocationItem;
