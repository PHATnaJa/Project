import React from 'react';
import './Header.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"></div>
      <ul className="nav-menu">
        <li className="nav-item">หน้าแรก</li>
        <li className="nav-item">ข้อมูล</li>
        <li className="nav-item">กิจกรรม</li>
        <li className="nav-item">คะแนนพิเศษ</li>
        <li className="nav-item">แบบประเมิน</li>
      </ul>
      <div className="profile">
        <span className="profile-name">Taksin Kumseeya</span>
        <button className="logout-button">ออกจากระบบ</button>
      </div>
    </nav>
  );
}

export default Navbar;
