import React,{useState,useRef,useEffect} from 'react';

export default function UseRefHook() {
   
    const [text,setText]=useState("");
    const renderCount=useRef(1);
    const inputRef=useRef(1);
    const previousValue=useRef(0);
    
    useEffect(()=>{
        renderCount.current=renderCount.current + 1;
        previousValue.current=text;
    })


    function focus()
    {
        inputRef.current.focus();
    }
   
  return (
   <>

<section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>UseRef Hook</h2>
          <h3>Find Out More <span>UseRef Hook</span></h3>
        </div>

        <div className="row">
            <div className='col-lg-4'>
            </div>
          <div className='col-lg-4'>
           <center>
             <input ref={inputRef} type="text"  className='form-control' value={text} onChange={e=>setText(e.target.value)} ></input>
             <button onClick={focus}>Focus</button>
             <div >The Text : {text}  </div><br></br>
             <div>Render : {renderCount.current}</div><br></br>
             <div>Previous value : {previousValue.current}</div>
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
