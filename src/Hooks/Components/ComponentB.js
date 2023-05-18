import React, { useContext } from 'react'
import { store } from '../UseContextHook'
export default function ComponentB() {
    const [data,setData]=useContext(store)
  return (
    <div className='card'>
    <div className='card-body'>
        Component-B:   {data}
       <div className='p-2 m-2'>
       Increment Four :   <button className='btn-sm' onClick={()=>{setData(data+4)}}>Click comp-B</button>
       </div>
    </div>
</div>
  )
}
