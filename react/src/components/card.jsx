import React from 'react'

const Card = (props) => {
  return (
     <div className='parent'>
      <div className='card'>
        <img src={props.img} alt="" />
        <h1>{props.user} Age :{props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti sed ea voluptatibus quaerat voluptates consectetur excepturi vitae veritatis maiores deserunt?</p>
        <button> View profile</button>
       
      </div>
     
   
    </div>
  )
}

export default Card