import React,{createContext,useState} from 'react';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
export const store=createContext();
export default function UseContextHook() {
    
    const [data,setData]=useState(0);


  return (
    <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Usecontext Hook</h2>
          <h3>Find Out More <span>Usecontext Hook</span></h3>
        </div>

        <div className="row">
            <div className='col-lg-4'>
            </div>
          <div className='col-lg-4'>
           <center>
            <store.Provider value={[data,setData]}>
                <ComponentA/>
                <ComponentB/>
            </store.Provider>
            <div className='p-2 m-2'>
           Increment One : <button className='btn p-2' onClick={()=>{setData(data+1)}}>Click</button>
           </div>
           <br></br>
           <br></br>
           <div>

           </div>

           </center>
          </div>
          <div className='col-lg-4'>
            </div>
         
        </div>

       

      </div>
    </section>

  )
}
