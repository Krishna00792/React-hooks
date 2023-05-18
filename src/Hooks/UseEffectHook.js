import React, {useEffect,useState} from 'react'

export default function UseEffectHook() {

      const [resourcetype,setResourceType] =useState('posts');
      const [items,setItems]=useState([]);
    //   console.log("render useEffect outside")
      useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourcetype}`)
        .then(response => response.json())
        .then(json=>setItems(json))
      },[resourcetype])

  return (
   <>
     {/* <!-- ======= UseEffect Section ======= --> */}
     <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>UseEffect Hook</h2>
          <h3>Find Out More <span>UseEffect Hook</span></h3>
        </div>

        <div className="row">
            <div className='col-lg-4'>
            </div>
          <div className='col-lg-4'>
           <center>
                <button className='btn btn-success p-2 m-4' onClick={()=>setResourceType("posts")}> Post </button>
                <button className='btn btn-success p-2 m-4' onClick={()=>setResourceType("users")}> User </button>
                <button className='btn btn-success p-2 m-4' onClick={()=>setResourceType("comments")}> Comment </button>
                <div>
                    <h2>{resourcetype}</h2>
                </div>
           </center>
          </div>
          <div className='col-lg-4'>
            </div>
          {/* content  */}
          {items.map(item => {
            return <pre key={item.id}>{JSON.stringify(item)}</pre>
          })}
        </div>

       

      </div>
    </section>

   </>
  )
}
