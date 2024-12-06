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
    <button
                onClick={postPalet}
                className="btn btn-primary mt-4 "
                style={{
                    fontSize: '1.2rem',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '8px',
                }}
            >
                تایید رنگ
            </button>

        <ColorPicker color={color} onChange={setColor} height={300} />
        
    </>
  )
}


export default ColorPalet