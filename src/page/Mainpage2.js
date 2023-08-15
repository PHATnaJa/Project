import './Mainpage2.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';
// import 
import Header from '../components/Header';
import React, { useState, useEffect  } from 'react';

function Mainpage2() {
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
            className={`menu-item ${activeMenuItem === 'จัดทำมคอ.7' ? 'active' : ''} center`}
            onClick={() => handleMenuItemClick('จัดทำมคอ.7')}
          >
            จัดทำมคอ.7
          </li>
          <li
            className={`menu-item ${activeMenuItem === 'ข้อมูลอาจารย์' ? 'active' : ''} center`}
            onClick={() => handleMenuItemClick('ข้อมูลอาจารย์')}
          >
            ข้อมูลอาจารย์
          </li>
          <li
            className={`menu-item ${activeMenuItem === 'ข้อมูลนักศึกษา' ? 'active' : ''} center`}
            onClick={() => handleMenuItemClick('ข้อมูลนักศึกษา')}
          >
            ข้อมูลนักศึกษา
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
            className={`menu-item ${activeMenuItem === 'สร้างแบบประเมิน' ? 'active' : ''} center`}
            onClick={() => handleMenuItemClick('สร้างแบบประเมิน')}
          >
            สร้างแบบประเมิน
          </li>
        </ul>
      </div>

      <div className="content">
      {activeMenuItem === 'หน้าแรก' && (
  <div>
        
  </div>
)}
      {activeMenuItem === 'ข้อมูล' && (
        <div>
         
        </div>
      )}
      {activeMenuItem === 'กิจกรรม' && (
        <div>
          
        </div>
      )}
      {activeMenuItem === 'คะแนนพิเศษ' && (
        <div>
          
        </div>
      )}
      {activeMenuItem === 'แบบประเมิน' && (
        <div>
         
        </div>
      )}
      </div>
      <div className="expand-button" onClick={handleSidebarToggle}>&#9776;</div>
    </div>
  );
}
export default Mainpage2;