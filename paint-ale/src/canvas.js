import React, { useRef, useState } from "react";
import './App.css';
import Square from'./Square.js';

function Canvas(props) {
	
	const { size, selectedColor } = props;

  const panelRef = useRef();

  let rows = [];

  for (let i = 0; i < 12; i++) {
  	for (let i = 0; i < 12; i++) {
    
  }
    
  }

  
      
   

	return (
    	<div className="canva">
    		
      		<button onClick={} className="button"> Print </button>
    	
      

	  

    	</div>
  	);
}

export default Canvas;
