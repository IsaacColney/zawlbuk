import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';
const Navbar = ({auth:{isAuthenticated,loading},logout}) => {
    const authlinks = (
      <ul>
        <li><Link to="/profiles">Scholars</Link></li>
        <li><Link to="/posts">Articles</Link></li>
        <li><Link to="/dashboard"><i className="fas fa-user"/>{"  "}<span className="hide-sm">Dashboard</span></Link></li>
        <li onClick={logout}><a onClick={logout} href="/login"><i className="fas fa-sign-out-alt"/>{"  "}<span className="hide-sm">Logout</span></a></li>
      </ul>
    )
    const guestlinks = (
      <ul>
        <li><Link to="/profiles">Scholars</Link></li>
        <li><Link to="/posts">Articles</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    )
    let showlinks = null;
    if(!loading){
      if(isAuthenticated){
        showlinks = authlinks;
      }
      else{
        showlinks = guestlinks;
      }
    }
    return (
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/"><i className="fas fa-atom"></i> {"   "}  Zawlbûk</Link>
        </h1>
        {showlinks}
      </nav>
    )
}
Navbar.propTypes = {
  auth:PropTypes.object.isRequired,
  logout:PropTypes.func.isRequired,
}
const maptoProps = state => ({
  auth:state.auth
})
export default connect(maptoProps,{logout})(Navbar);
