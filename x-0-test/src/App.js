import './App.css';
import React from 'react';
import { useState } from 'react';
import Boxes from './Boxes';

const MyInputs = () => {
 const [number, setNumbers] = useState(0)
 const [boxes, setBoxes] = useState([])
 return(
   <div className='main'>
    <input 
    type='number'
    className='myInput'
    value={number}
    onChange={(e)=>setNumbers(e.target.value)}
    />
    <button onClick={(e)=>setBoxes([number])}>OK</button>
    {boxes && <Boxes  number={boxes} />}
    </div>
 )
}

export default MyInputs