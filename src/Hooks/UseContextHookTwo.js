
import React,{createContext,useState} from 'react';
import Count from './Components/Count';
import Display from './Components/Display';
export const store =createContext();
const UseContextHookTwo = () => {
    const [item,setItem]=useState([
        {
        brand:'Nokia',
        color:'Red',
        },
        {
        brand:'Redimi',
        color:'Yellow',
        },
        {
        brand:'Oppo',
        color:'Green',
        }
])

  return (
    <>
    <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Usecontext Hook Project</h2>
          <h3>Find Out More <span>Usecontext Hook</span></h3>
        </div>

        <div className="row">
            <div className='col-lg-4'>
            </div>
          <div className='col-lg-4'>
           <center>
    <store.Provider value={[item,setItem]}>
     <Count/>
     <Display/>
    </store.Provider>
   
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

    </>
  )
}

export default UseContextHookTwo;