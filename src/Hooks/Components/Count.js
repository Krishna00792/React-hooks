import React,{useContext} from 'react'
import { store } from '../UseContextHookTwo';
const Count = () => {
    const [item,setItem]=useContext(store);
  return (
    <> 
    <div className='card'>
        <div className='card-body'>
            Item count:   {item.length}
        </div>
    </div>
    </>
  )
}

export default Count;