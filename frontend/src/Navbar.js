import React from 'react';
import './App.css';

// Renders a navbar with the organization name and logo
function Navbar() {
  // Name and link of the organization to be rendered in the navbar
  let companyName = process.env.REACT_APP_COMPANY_NAME;
  let companyLink = process.env.REACT_APP_COMPANY_LINK
  // Where the logo is located
  let logo = "assets/img/logo.png"
  return (
      <nav className="navbar navbar-light navbar-expand">
          <div className="container-fluid">
            <img style={{width: '60px', height: '60px'}} src={logo} alt="Organization Logo"/>
            <a href={companyLink} className="navbar-brand" >{companyName}</a>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="nav navbar-nav">
                <li className="nav-item"></li>
              </ul>
            </div>
          </div>
      </nav>
  );
}

export default Navbar;
