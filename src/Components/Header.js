import React, { useState, useEffect } from "react";

const Header = () => {
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false;
  };
  const [dark, setDark] = useState(getMode());

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
    </div>
  );
};

export default Header;
