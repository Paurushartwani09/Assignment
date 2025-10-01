import React, { useState, useEffect } from 'react';
import '../App.css';
import { FaRegCalendarAlt, FaBell, FaUserCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";



const Header = ({onClick }) => {
  const [now, setNow] = useState(new Date());


  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className=" custom-header app-header d-flex justify-content-between align-items-center px-4 py-3  text-white">

      <div className="d-flex align-items-center gap-3">
        <div className="logo d-flex align-items-center">

          <a className="me-3 hamburger-icon" onClick={ onClick }><GiHamburgerMenu size={22} color="#ccc"/></a>

          <span className="logo-text">
            <span style={{ color: '#FFFFFF' }}>CYB</span>
            <span style={{ color: '#00AEEF' }}>PASS</span>
          </span>
           <img
            src="../../public/vite.svg"
            alt="Logo"
            className="logo-icon me-2"
            style={{ height: '30px' }}
          />
        </div>
      </div>


      <div className="d-flex align-items-center gap-4">

        <div className="text-end  small">
          <div>{now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
          <div>{now.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</div>
        </div>


        <FaRegCalendarAlt size={18} color="#ccc" />
        <FaBell size={18} color="#ccc" />
        <FaUserCircle size={22} color="#ccc" />
      </div>
    </header>
  );
};

export default Header;
