import {React,useEffect, useState}  from 'react'

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { PostColorpalet } from '../core/services/api/colorPalets';

const ColorPalet = () => {
    
    const [color, setColor] = useColor("#561ecb");
    const [color1, setColor1] = useState([]);

    
    const postPalet = async() => {
       
        
        const encodedColor = color.hex.replace('#', '%23'); 
        setColor1(encodedColor);
        const data = await PostColorpalet(`[${encodedColor}]`);
        console.log(color1)
   
    }
    
  return (
    <> 

        <ColorPicker color={color} onChange={setColor} height={300} />;
        <button onClick={postPalet}>Submit Palette</button>

    </>
  )
}


export default ColorPalet