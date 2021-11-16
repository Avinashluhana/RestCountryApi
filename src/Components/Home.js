import React, { useEffect, useState } from "react";
import "./Home.css";
const url = "https://restcountries.com/v3.1/all";

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    //   setIsLoading(false);
    console.log(countries);
  };
  useEffect(() => {
    fetchCountryData();
  }, []);
  return (
    <>
      {countries.map((country) => {
        const { id, name, population, region, capital, flag } = country;
        return (
          <div>
            <img src={flag} alt={name} />
            <h3>{name}</h3>
            <h4>{population}</h4>
            <h4>{region}</h4>
            <h4>{capital}</h4>
          </div>
        );
      })}
      {/* <div className="navbar">
        <h2 className="heading">Where in the world</h2>
        <br />
        <hr />
      </div>
      <input
        type="search"
        className="search-bar"
        placeholder="search for a country"
      />
      <div className="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          filter by region
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div> */}
      {/*      
        {countries.map((country) => {
          const { numericCode, flag, name, population, region, capital } =
            country;
          return <article key={numericCode}>
              <div>
                <img src={flag} />
                <h3>{name}</h3>
              </div>
            </article>
        })} */}
    </>
  );
};
