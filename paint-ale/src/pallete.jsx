import React from "react";
import './App.css';

function Pallete() {
  return (
    <div className="pallete">
      <button className="new"> New Drawing </button>
      <button className="print"> Print </button>
      <h3>Choose a color to paint: </h3>
      <div className= "colors">
	      <button className="negro"> . </button>
	      <button className="cafe"> . </button>
	      <button className="blanco"> . </button>
	       <button className="gris"> . </button>
	      <button className="rojo"> . </button>
	      <button className="rosa"> . </button>
	      <button className="naranja"> . </button>
	      <button className="durazno"> . </button>
	       <button className="amarillo"> . </button>
	      <button className="beige"> . </button>
	      <button className="verde"> . </button>
	       <button className="turquesa"> . </button>
	      <button className="azul"> . </button>
	      <button className="azulito"> . </button>
	      <button className="morado"> . </button>
	      <button className="moradito"> . </button>
	     
	  </div>
	  

    </div>
  );
}

export default Pallete;
