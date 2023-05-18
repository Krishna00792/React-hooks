import React,{useContext,useState} from 'react'
import { store } from '../UseContextHookTwo';
const Display = () => {
    const [item,setItem]=useContext(store);
    const [brand,setBrand]=useState("");
    const [color,setColor]=useState("");
   
    const submitHandler = e => {
        e.preventDefault();
        setItem([...item,{brand:brand,color:color}])
    }
  return (
    <> 
    <div className='card'>
        <div className='card-body'>
         <ul>
        { item.map((itm) =>
       <li><h3>{itm.brand} - {itm.color}</h3></li>
         )}
         </ul>
        </div>
    </div>
    <div className='card'>
        <div className='card-body'>
          <form className='form' onSubmit={submitHandler}>
             <input type="text" placeholder='Enter Brand' onChange={(e)=>{setBrand(e.target.value)}} className="form-control" />
             <input type="text" placeholder='Enter Color' onChange={(e)=>{setColor(e.target.value)}} className="form-control" />
             <br></br>
             <input type="submit"  className=' p-2 mt-4 btn btn-primary' value="Submit"/>
          </form>
        </div>

    </div>
    </>
  )
}

export default Display;