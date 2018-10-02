import React from 'react';


function Button(props) {
  const { name , btn} = props
  return(
    <div>
      <button className='btn' onClick= {btn}>{name}</button>
    </div>
  )
}


export default Button;
