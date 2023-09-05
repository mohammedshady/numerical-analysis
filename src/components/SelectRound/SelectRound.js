import React from "react";
import Slider from "@mui/material/Slider";
import "./SelectRound.css";

const SelectInput = ({ option, setRound }) => {
  return (
    <div className="select-wrapper">
      <label htmlFor="">Fp Digits {option}</label>
      <Slider
        sx={{
          color: "var(--dark)",
          "& .MuiSlider-thumb:hover": {
            boxShadow: "none",
          },
        }}
        size="small"
        value={option}
        aria-label="Small"
        valueLabelDisplay="off"
        onChange={(e) => setRound(e.target.value)}
        min={1}
        max={6}
      />
    </div>
  );
};
export default SelectInput;
