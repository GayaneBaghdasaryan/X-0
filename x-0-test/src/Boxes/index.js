import './style.css'
import React from 'react'

let sign = "X"
let arrX = []
let arr0 = []
const Play_Turn = (event,{numberIndex}) =>{
  if(!event.target.innerText){
      event.target.innerText = sign 
      if(sign==="X"){
        arrX.push(numberIndex)
        sign = "0"
      }else{
        sign = "X"
          arr0.push(numberIndex)
      }
 }
  

}

const Boxes = ({number}) => { 
  let num = +number
  const newwidth = document.getElementById('bigBox');
  if(num>=3){
    newwidth.style.width = (num*113)+'px'
    }
  return(
    <div id='bigBox' style={{width:'280px'}}>
    {Array.from({length: number**2}, (_,numberIndex) => { 
        return (
          <div key={numberIndex}>
            <div className='playBoxes'
             onClick={event =>{Play_Turn(event,{numberIndex})}}
             >
            </div>
          </div>
        );
      })
    }
      </div>
  ) 
  }

 

 export default Boxes