import React from 'react'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Text-Utilizer</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
        
        
        
      
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  <div className={`form-check mx-3 small form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.buttonName}</label>
</div>
  {/* <div className={`form-check mx-3 small form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleredmode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.redmode===true?"Disable Red mode":"Enable Red Mode"}</label>
</div> */}
  </div>
</nav>
    )
}
