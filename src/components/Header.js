import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="header">
      <h1 className="logo"></h1>
      <div className="profile">
        {/* <img className="profile-picture" src="/path_to_profile_picture" alt="โปรไฟล์" /> */}
        <div className="profile-info">
          <span className="profile-name">Taksin Kumseeya</span>
          <span className="logout-text">ออกจากระบบ</span>
        </div>
      </div>
    </header>
  );
}

export default Header;