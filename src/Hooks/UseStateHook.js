import React,{useState} from 'react'

export default function UseStateHook() {
  const [count,setCount]=useState(4);
  const  [student,setStudent]=useState({rollnumber:4,name:'kumar'});
  function decrement()
  {
    setCount(prevCount=>prevCount-1);
    setStudent(prevStudent=>{                                 // with functional version it carries previous object values 
      //  return {rollnumber:prevStudent.rollnumber+1}; // Overriding entair object 
       return {...student,rollnumber:prevStudent.rollnumber+1};   
    });
     setStudent({...student,rollnumber:student.rollnumber-1})  // without functional version
  }
  function increment()
  {
    setCount(prevCount=>prevCount+1);

    // setCount(prevCount=>prevCount+1);
    // setCount(prevCount=>prevCount+1);
  }
  return (
   <>
     {/* <!-- ======= UseState Section ======= --> */}
     <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>UseStateHook</h2>
          <h3>Find Out More <span>UseStateHook</span></h3>
        </div>

        <div className="row">
            <div className='col-lg-4'>
            </div>
          <div className='col-lg-4'>
            <center>
                <button className='btn btn-secondary p-2' onClick={decrement}> - </button>
                <span className='p-2'>{count} &nbsp; {student.rollnumber} &nbsp; {student.name}</span>
                <button className='btn btn-secondary p-2' onClick={increment}> + </button>
           </center>
          </div>
          <div className='col-lg-4'>
            </div>
         
        </div>

      </div>
    </section>
    {/* <!-- End About Section --> */}
    </>
  )
}

