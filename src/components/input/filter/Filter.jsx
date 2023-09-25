import { useEffect, useState } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  searchByRegion,
  showAllCountries,
} from "../../../features/countries/countriesAction";
import { reset, setRegion } from "../../../features/countries/countriesSlice";

import "./filter.css";

const Filter = () => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [filter, setFilter] = useState("");
  const [displayDropDown, setDisplayDropDown] = useState(false);

  const dispatch = useDispatch()

  const handleDropDown = () => {
    setDisplayDropDown(!displayDropDown);
  };
  useEffect(() => {
    if(filter !== "") {
      dispatch(setRegion(filter.toLowerCase()))
    }
  }, [dispatch, filter])

  return (
    <section className="filter-container">
      <div className="filter" onClick={handleDropDown}>
        <input
          type="text"
          readOnly
          placeholder="Filter by Region"
          value={filter}
          className="filter-input"
        />
        <i className="fa-solid fa-angle-down"></i>
      </div>
      {displayDropDown ? (
        <div className="dropdown">
          {regions.map((item, index) => {
            return (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => {
                  setFilter(item);
                  handleDropDown();
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      ) : null}
    </section>
  );
};

export default Filter;
