import { useState, useEffect } from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import {
  searchByRegion,
  showAllCountries,
} from "../../features/countries/countriesAction";
import { reset } from "../../features/countries/countriesSlice";
// react router dom
import { Link } from "react-router-dom";

import "./country.css";

const Country = () => {
  const { loading, countriesData, error, success, region, searchTerm } = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showAllCountries());
    if (region) {
      dispatch(searchByRegion(region));
    }

    if (error) {
      console.log(error);
    }
  }, [dispatch, error, success, region]);

  const data = countriesData.filter((item) => item.name.common.toLowerCase().includes(searchTerm))
  console.log(data)
  return (
    <section className="country-container">
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        data.length > 0 &&
        data.map((item, index) => {
          return (
            <Link className="country-card" to={`/${item.cioc}`} key={index}>
              <img
                src={item.flags.png}
                alt={item.flags.alt}
                className="country-image"
              />
              <div className="country-content">
                <h3>{item.name.common}</h3>
                <p>
                  Population: <span>{item.population}</span>
                </p>
                <p>
                  Region: <span>{item.region}</span>
                </p>
                <p>
                  Capital: <span>{item.capital}</span>
                </p>
              </div>
            </Link>
          );
        })
      )}
    </section>
  );
};

export default Country;
