import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import {history} from '../../routes/AppRouter'
import axios from 'axios';

const Navbar = props => {

  const [name, setName] = useState('');
  useEffect(() => {
    const username = window.localStorage.getItem('userName');
    if(username) {
      setName(username);
    }
  })
  const handleLogout = () => {
    const token = window.localStorage.getItem('userToken');
    axios.get('/user/logout', {headers: {authToken:token}})
      .then((res) => {
        window.localStorage.removeItem('userToken')
        window.localStorage.removeItem('userName')
        history.push('/signin')
      }).catch((err) => {

      })
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
        <li onClick={handleLogout} className='nav-item'>
            <Link className='nav-link'>Logout</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link'>Hi {name || 'user'}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
