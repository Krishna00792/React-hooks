import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
          {/* <!-- ======= Header ======= --> */}
  <header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <h1 className="logo"><a href="index.html">React JS Hooks<span>.</span></a></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      {/* <!-- <a href="index.html" className="logo"><img src="assets/img/logo.png" alt=""></a>--> */}

      <nav id="navbar" className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>

          <li><Link to="/jobs">useMeno</Link></li>
          <li className="dropdown"><span>React Hooks</span> <i className="bi bi-chevron-down"></i>
            <ul>
             
              <li><Link to="/use-state-hook">useState</Link></li>
                  <li><Link to="/use-effect-hook">useEffect</Link></li>
                  <li><Link to="/use-memo-hook">useMemo</Link></li>
                  <li><Link to="/use-ref-hook">useRef</Link></li>
                  <li><Link to="/use-ref-example">useRefExample</Link></li>

                  
                  <li className="dropdown">
                  <Link to="/use-context-hook">useContext</Link>
                        <ul>
                          <li><Link to="/use-context-hook-two">Project</Link></li>
                        </ul>
                  </li>

                  {/* <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/contact">Contact</Link></li> */}
              {/* <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li> */}
            </ul>
          </li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  {/* <!-- End Header --> */}
   <Outlet/>
    </>
  )
}
