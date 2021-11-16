import React from "react";

function Country({ name, flag, population, region, capital, area }) {
  return (
    <div>
      
      <div>
        <img src={flag} alt="flag" />
      </div>
      <div>
        <h2> name: {name}</h2>
        <p>Capital : {capital}</p>
        <p>Region : {region}</p>
        <p>Population : {population}</p>
        <p>Area : {area}</p>
      </div>
    </div>
  );
}

export default Country;
