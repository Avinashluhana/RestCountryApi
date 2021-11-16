import React, { useEffect, useState } from "react";
import Country from "./Country";
function Check() {
  const [countrys, setCountrys] = useState([]);

  //getData
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountrys(data));
  }, []);
  console.log(countrys);
  return (
    <div className="conainer">
      {countrys.map((country) => (
        <Country {...country}></Country>
      ))}
    </div>
  );
}

export default Check;
