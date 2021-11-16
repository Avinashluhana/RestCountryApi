import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Country1.css";

export const Country1 = () => {
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false;
  };
  const [data, setData] = useState([]);
  const [dark, setDark] = useState(getMode());
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  const getData = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    setCountry(await response.json());
    console.log(data);
  };
  useEffect(() => {
    getData();
  });
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark));
  }, [dark]);
  return (
    <div>
      <div className={dark ? "navbar navbar-light" : "navbar"}>
        <h3 className="heading">Where in the world?</h3>
        <h6 className="dark-mode" onClick={() => setDark(!dark)}>
          {/* <i className="fas fa-moon"></i> */}
          {dark ? "🌜 Dark mode" : " ☀️ Light mode"}
        </h6>
      </div>
      <div className={dark ? "main-body main2" : "main-body"}>
        <Link to="/">
          <button className="back-button">Back</button>
        </Link>
        {country.map((elem) => {
          return (
            <div className="container">
              <div className="country-data">
                <div className="row">
                  <div className="col-lg-4">
                    <h1 className="flag1">{elem.flag}</h1>
                  </div>

                  <div className="col-lg-4">
                    <div className="second-column">
                      <h2>{elem.name.common}</h2>
                      {/* <p>Native Name:{elem.nativeName}</p> */}
                      <p>population: {elem.population}</p>
                      <p>Region: {elem.region}</p>
                      <p>Sub Region: {elem.subregion}</p>
                      <p>Capital: {elem.capital}</p>
                      <div className="row">
                        <p>Border Countries:</p>
                        {elem.borders.map((border) => {
                          <ul>
                            <li>{border.borders}</li>
                          </ul>;
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="third-column">
                      <p>Top level Domain {elem.topLevelDomain}</p>
                      <p>Currencies{elem.currencies[0]}</p>
                      <p>Languages: {elem.languages[0]}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
