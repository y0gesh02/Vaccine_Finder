import React from 'react';
function Nav() {
 return(
     <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand"  >💉Vaccine Finder💉</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" target="_blank"  rel="noopener noreferrer" href="https://www.cowin.gov.in/">About</a>
        </li>
        
        <li className="nav-item">
        <a className="nav-link active" target="_blank"  rel="noopener noreferrer" href="http://www.google.com/search?q=PIN+Code+of">Know Your Pincode</a>
        </li>
      </ul>
      <form className="d-flex" action="https://www.cowin.gov.in/" target="_blank"  rel="noopener noreferrer" >
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
        <button className="btn btn-outline-success" >Book Vaccine</button>
      </form>
    </div>
  </div>
</nav>
    
     </>
  );
}

export default Nav;