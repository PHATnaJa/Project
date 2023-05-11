import React, { useState } from 'react';
import './Mainpage.css';

import Header from '../components/Header';

function Mainpage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('หน้าแรก');
  

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div>
      <Header/>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="logo">
          {/* <img src="path_to_your_logo_image" alt="Logo" /> */}
          <img src="/images/ce.png" alt="รูปภาพ" className="image" />
          <h2 className="small-heading">Thai Qualifications Framework for Engineering Programs and volunteer/public relations score system: case study Computer Engineering Program</h2>
        </div>
        <ul className="menu">
          <li
            className={`menu-item ${activeMenuItem === 'หน้าแรก' ? 'active' : ''} center`}
            onClick={() => handleMenuItemClick('หน้าแรก')}
          >
            หน้าแรก
          </li>
          <li
            className={`menu-item ${activeMenuItem === 'ข้อมูล' ? 'active' : ''} center`}
            onClick={() => handleMenuItemClick('ข้อมูล')}
          >
            ข้อมูล
          </li>
          <li
            className={`menu-item ${activeMenuItem === 'กิจกรรม' ? 'active' : ''} center`}
            onClick={() => handleMenuItemClick('กิจกรรม')}
          >
            กิจกรรม
          </li>
          <li
            className={`menu-item ${activeMenuItem === 'คะแนนพิเศษ' ? 'active' : ''} center`}
            onClick={() => handleMenuItemClick('คะแนนพิเศษ')}
          >
            คะแนนพิเศษ
          </li>
          <li
            className={`menu-item ${activeMenuItem === 'แบบประเมิน' ? 'active' : ''} center`}
            onClick={() => handleMenuItemClick('แบบประเมิน')}
          >
            แบบประเมิน
          </li>
        </ul>
      </div>

      <div className="content">
        <h1>{activeMenuItem}</h1>
      </div>

      <div className="expand-button" onClick={handleSidebarToggle}>&#9776;</div>
    </div>
  );
}

export default Mainpage;