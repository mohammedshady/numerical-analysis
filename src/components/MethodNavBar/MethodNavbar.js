import React, { useState } from "react";
import "./MethodNavbar.css";

const MethodNavbar = ({ setCurMethod, routes, onClear }) => {
  const [methods, setMethods] = useState([routes[0]]);
  const [itemI, setItemI] = useState(0);

  const handleSetMethod = (e) => {
    if (onClear) {
      onClear(null);
    }
    setCurMethod(e.target.innerText);
  };

  return (
    <>
      <div className="in-route-nav">
        <ul
          className="iroute-nav-list scale-in-hor-left"
          onAnimationEndCapture={() => {
            setMethods(routes);
          }}
        >
          {methods.map((item, index) => {
            return (
              <div key={item}>
                <li
                  className="list-item fade-in-image"
                  onClick={(e) => {
                    setItemI(index);
                    handleSetMethod(e);
                  }}
                  key={item}
                  name={item}
                  style={{
                    background: itemI === index ? "var(--secondary)" : "",
                  }}
                >
                  {item}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MethodNavbar;
