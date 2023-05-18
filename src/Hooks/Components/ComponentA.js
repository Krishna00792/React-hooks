import React,{useContext} from 'react'
import { store } from '../UseContextHook';
export default function ComponentA() {
    const [data,setData]=useContext(store);
    
  return (
    <div className='card'>
        <div className='card-body'>
            Component-A:   {data}
            <div className='p-2 m-2'>
                 Increment Two :  <button className='btn-sm' onClick={()=>{setData(data+2)}}>Click comp-A</button>
            </div>
        </div>
    </div>
  )
}
