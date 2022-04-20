import { Link } from 'react-router-dom';

import LogoDH from "../images/wineline-logo2.png";

function Sidenav (props) {
  return (
    <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon">
          <img className="w-100" src={LogoDH} alt="Digital House"/>
        </div>
      </a>
      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard - Wineline</span></a>
      </li>

      <li className="nav-item active">
        <Link to="/" className="nav-link" >
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Home</span>
        </Link>
      </li>
	  <li className="nav-item active">
        <Link to="/genres/1" className="nav-link" >
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Product ID: 1</span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link to="/users" className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Users</span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link to="/about" className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>About Us</span>
        </Link>
      </li>

      
      <hr className="sidebar-divider d-none d-md-block"/>
    </ul>
  )
}

export default Sidenav;