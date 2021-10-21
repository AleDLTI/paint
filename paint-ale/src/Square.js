import React, { useState } from "react";
import './App.css';

function Square(props) {
  const { selectedColor } = props;

  const [squareColor, setSquareColor] = useState("#000");
  const [oldColor, setOldColor] = useState(squareColor);
  const [ChangeColor, setChangeColor] = useState(true);

  function Colorear() {
    setSquareColor(colorSelected);
    setChangeColor(false);
  }

  function pasarMouse() {
    setOldColor(squareColor);
    setSquareColor(colorSelected);
  }

  function stopColor() {
    if (ChangeColor) {
      setSquareColor(oldColor);
    }

    setChangeColor(true);
  }

  return (
    <div
      className="square"
      style={{ backgroundColor: squareColor }}
      onClick={Colorear}
      onMouseEnter={pasarMouse}
      onMouseLeave={stopColor}
    
    ></div>
  );
}

export default Square;