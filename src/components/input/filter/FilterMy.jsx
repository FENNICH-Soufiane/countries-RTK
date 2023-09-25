import { useEffect, useState } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  searchByRegion,
  showAllCountries,
} from "../../../features/countries/countriesAction";

import "./filter.css";

const Filter = () => {
  const [data, setData] = useState([]);
  const { countriesData, success, error, loading, countrySearched } = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();
  // this code for showing region in select option
  useEffect(() => {
    if (success) {
      dispatch(showAllCountries());
      setData(countriesData);
    }
  }, [dispatch, success, error]);

  // code for filtering
  const handleFilterByRegion = (e) => {
    dispatch(searchByRegion(e))
  }

  return (
    <section className="filter-container">
      <div className="filter">
        <input
          type="text"
          readOnly
          placeholder="Filter by Region"
          value=""
          className="filter-input"
        />

        {loading ? ( // Check if data is being fetched
          <div>Loading...</div> // You can use a spinner or any loading message here
        ) : data.length > 0 ? (
          <select name="pets" id="pet-select" onChange={(e) => handleFilterByRegion(e.target.value)}>
             <option value="">Filter by Region</option>
            {Array.from(new Set(data.map((item) => item.region))).map(
              (region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              )
            )}
          </select>
        ) : (
          <span>No data returned</span>
        )}
      </div>
    </section>
  );
};

export default Filter;
