import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Thapa.css";

const Thapa = () => {
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false;
  };
  const [data, setData] = useState([]);
  const [dark, setDark] = useState(getMode());
  const getData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    setData(await response.json());
    console.log(data);
  };
  useEffect(() => {
    getData();
  });

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark));
  }, [dark]);

  const filterByRegion = async (region) => {
    if (region === "") return;
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = await res.json();
    await setData(data);
  };
  const searchCountry = async (name) => {
    if (name.length >= 3) {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await res.json();
      console.log(data);
      if (data.length > 0) {
        setData(data);
      }
    } else if (name.length === 0) {
      const res = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await res.json();
      setData(data);
    }
  };
  return (
    <>
      <Link to="/">
        <div className={dark ? "navbar navbar-light" : "navbar"}>
          <h3 className="heading">Where in the world?</h3>
          <h6 className="dark-mode" onClick={() => setDark(!dark)}>
            {/* <i className="fas fa-moon"></i> */}
            {dark ? "🌜 Dark mode" : " ☀️ Light mode"}
          </h6>
        </div>
        <div className={dark ? "app-body white-mode" : "app-body"}>
          <input
            type="search"
            className={dark ? "search-bar search-light" : "search-bar"}
            placeholder="search for a country"
            onChange={(term) => searchCountry(term.target.value)}
          />
          <select
            className={dark ? "dropdown dropdown-light" : "dropdown"}
            onChange={(val) => filterByRegion(val.target.value)}
          >
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>

          <div className="container">
            <section className="gird">
              {data.map((currElem) => {
                return (
                  <Link to={`/${currElem.name.common}`}>
                    <div className="container">
                      <h1 className="flag">{currElem.flag}</h1>
                      <div className={dark ? "card card-light" : "card"}>
                        <h4 className="country-name">{currElem.name.common}</h4>
                        <span>population: {currElem.population}</span>
                        <span>Region: {currElem.region}</span>
                        <span>Capital: {currElem.capital}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </section>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Thapa;
