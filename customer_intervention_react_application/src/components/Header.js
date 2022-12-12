import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <header style={{ height: 150, backgroundColor: "gray" }}>
        <img src="./R2.png" className="Logo" alt="Rocket Elevator logo" />
      </header>
    </div>
  );
}

export default Header;
