import React, { useState } from 'react';
import { TwitterPicker } from "react-color"; //importando libreria de color de react para usar el selector de color
import './App.css';

function Pallete(props) {

	const  [size, setSize]= useState(12);
	const [colorSelected, setColorSelected]= useState ("#000");
	function changeColor(color) {
    setColorSelected(color.hex);
  }



  return (

    <div className="pallete">
      <button  className="new"> New Drawing </button> {/*boton magico que borra el canva para hacer un unevo dibujo*/}
      
      <button className="print"> Print </button>  {/* boton magico para sacar screnshot del dibujo*/}
     
      <h3>Choose a color to paint: </h3>
      
       <TwitterPicker color={colorSelected} onChangeComplete={changeColor} />    {/*usando el selector de color*/} 
    </div>


  );
}

export default Pallete;
