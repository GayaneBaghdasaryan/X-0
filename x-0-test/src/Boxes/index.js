import './style.css'
import React from 'react'

let sign = "X"
let arrX = []
let arr0 = []
const Play_Turn = (event,{numberIndex,number}) =>{
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
//   let num = +number
//   const newwidth = document.getElementById('bigBox');
//   console.log(newwidth.style);
// //   if(num>3){
// //     newwidth.style.width = (num*113)+'px'
// //   }
  return(
    <div id='bigBox'>
    {Array.from({length: number**2}, (_,numberIndex) => { 
        return (
          <>
            <div className='playBoxes'
             onClick={event =>{Play_Turn(event,{numberIndex,number})}}
             >
            </div>
          </>
        );
      })
    }
      </div>
  ) 
  }

 

 export default Boxes