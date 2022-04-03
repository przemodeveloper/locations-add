import classes from "./LocationItem.module.css";

const LocationItem = ({ details, type, address }) => {
  return (
    <li className={classes.item}>
      <h1>{type}</h1>
      <h2>{details}</h2>
      <ul>
        {Object.values(address).map((val, i) => {
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
