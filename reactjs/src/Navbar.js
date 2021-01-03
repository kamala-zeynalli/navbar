import React from 'react'

 function Navbar() {
    return (
        <div>
             <div className="container-fluid nav_bg">
        <div className="row">

          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <a className="navbar-brand">BEST TRADE GROUP</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a activeClassName="menu_active" className="nav-link">
                        Join us   </a>   </li>   </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Navbar;