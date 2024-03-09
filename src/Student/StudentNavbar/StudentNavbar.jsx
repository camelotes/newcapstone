import React, {useState} from 'react'
import { NavLink, Link } from 'react-router-dom';
import Logo from './logo.png';
import './studentNavbar.css';
 
const StudentNavbar = () => {
    const[menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className='studentnav'>
        <Link to="/Student/Homepage" className='nav__logo'>
              <img src={Logo} alt='Navbar Logo'/>
            </Link>
            <div className='menu' onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div >
        <ul className={menuOpen ? "open" : ""}>
            <li className='studentnav'>
                <NavLink to='/Student/Events'>Events</NavLink>
            </li>
            <li className='studentnav'>
                <NavLink to='/Student/Articles'>Articles</NavLink>
            </li>
            <li className='studentnav'>
                <NavLink to='/Student/FaQs'>FaQs</NavLink>
            </li>
            <li className='studentnav' >
                <NavLink to='/Student/Profile'>Profile</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default StudentNavbar