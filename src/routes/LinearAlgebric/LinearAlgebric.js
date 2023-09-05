import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MethodNavbar from "../../components/MethodNavBar/MethodNavbar";
import "./LinearAlgebric.css";
import GaussElmination from "./LinearMethods/GaussElmination";
import LuDecomposition from "./LinearMethods/LUDecomposiotion";
import CramersRule from "./LinearMethods/CramersRule";
import GaussJordan from "./LinearMethods/GaussJordan";

const routes = ["GE", "LU", "CR", "GJ"];

const LinearAlgebric = () => {
  const [method, setCurMethod] = useState(routes[0]);
  const [animation, setAnimation] = useState("method-form");

  useEffect(() => {
    setAnimation("method-form");
  }, [method]);
  return (
    <>
      <div
        className={`main-section ${animation}`}
        onAnimationEnd={() => {
          setAnimation("");
        }}
      >
        {method === "GE" && <GaussElmination />}
        {method === "LU" && <LuDecomposition />}
        {method === "CR" && <CramersRule />}
        {method === "GJ" && <GaussJordan />}
      </div>
      <MethodNavbar setCurMethod={setCurMethod} routes={routes} />
    </>
  );
};
export default LinearAlgebric;
