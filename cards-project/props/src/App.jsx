import React from 'react'
import Card from "./components/Card"
import User from './components/User'


const App = () => {

  const arr =[
    {
      user: "honey",
      age:50
    },
    {
      user: "arjit",
      age:43
    },
    {
      user: "jubin",
      age:47
    },
    {
      user: "atif",
      age:49
    },

  ]


  return (
    <div className='parent'> 

     {arr.map(function(elem){
      console.log(elem.age);
      
     })} 


       
      {/* <User name={arr[0]} /> */}
      <User name="nikhil1" />
      <User name="nikhil2" />
          

    </div>
  )
}

export default App