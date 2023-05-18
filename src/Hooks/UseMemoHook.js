import React,{useState,useMemo,useEffect} from 'react';

export default function UseMemoHook() {

    const [number,setNumber]=useState(0);
    // const [test,setTest]=useState(0);
    const [dark,setDark]=useState(false);
    let doubleNumber=0;
    const theme={
        'backgroundColor': dark ? 'red' : 'black',
        'color': dark ? 'black' : 'red'
    }
    
    // useEffect(()=>{
    //     console.log("useEffect function");
    //     setTest(doubleNumberFun(number))
    // },[number])
    doubleNumber=doubleNumberFun(number);
    // useMemo(()=>{
     
    //   console.log("using memo")
    // },[number]);
   

  return (
   <>

<section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>UseMemo Hook</h2>
          <h3>Find Out More <span>UseMemo Hook</span></h3>
        </div>

        <div className="row">
            <div className='col-lg-4'>
            </div>
          <div className='col-lg-4'>
           <center>
             <input type="number" value={number} onChange={e=>setNumber(e.target.value)} ></input>
             <input type="submit" value="Change Theme" onClick={()=> setDark(prevDark=>!prevDark)} ></input>
             <div style={theme}>{doubleNumber}</div>
           </center>
          </div>
          <div className='col-lg-4'>
            </div>
         
        </div>

       

      </div>
    </section>

   
   </>
  )

  function doubleNumberFun(num)
  {
    console.log("calling slow function")
    for(let i=0;i<99990000;i++)
    {

    }
    return num*2;
  }
}
