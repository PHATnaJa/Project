import './Mainpage2.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';
// import 

import { AutoComplete } from "primereact/autocomplete";
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';


        
import Header from '../components/Header';
import React, { useState, useEffect  } from 'react';

function Mainpage2() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('หน้าแรก');
  const [activeMenuItemDrop, setActiveMenuItemDrop] = useState(null);

  // const [selectedItem, setSelectedItem] = useState(null);
  const currentYearAD = new Date().getFullYear();
  const currentYearBE = currentYearAD + 543;
  
  const items = Array.from({ length: 10 }).map((_, i) => ({
    label: `${currentYearBE + i}`,
    value: currentYearBE + i,
  }));

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };
  // const handleMenuItemChange = (event) => {
  //   setActiveMenuItemDrop(event.target.value);
  // };
  
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
          {/*================*/}
          <li className={`menu-item ${activeMenuItem === 'มคอ.7' ? 'active' : ''} center`}
            onClick={() => handleMenuItemClick('มคอ.7')}
            >
            มคอ.7
          </li>
          {/*================*/}
          <li className={`menu-item ${activeMenuItem === 'จัดทำมคอ.7 หมวดที่ 1' ? 'active' : ''} center`}
            onClick={() => handleMenuItemClick('จัดทำมคอ.7 หมวดที่ 1')}
            >
            จัดทำมคอ.7 หมวดที่ 1
          </li>
          {/*================*/}
          <li className={`menu-item ${activeMenuItem === 'จัดทำมคอ.7 หมวดที่ 2' ? 'active' : ''} center`}
            onClick={() => handleMenuItemClick('จัดทำมคอ.7 หมวดที่ 2')}
            >
            จัดทำมคอ.7 หมวดที่ 2
          </li>
          {/*================*/}
          <li className={`menu-item ${activeMenuItem === 'จัดทำมคอ.7 หมวดที่ 3' ? 'active' : ''} center`}
            onClick={() => handleMenuItemClick('จัดทำมคอ.7 หมวดที่ 3')}
            >
            จัดทำมคอ.7 หมวดที่ 3
          </li>
          {/*================*/}
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
{/*================*/}
      {activeMenuItem === 'มคอ.7' && (
      <div>
      <h1>{activeMenuItem}</h1>
      <div className=''>
       <h3>สร้างผลการดำเนินงาน</h3>
       <h4>ชื่อมหาวิทยาลัย</h4>
       <div className="card">
          <AutoComplete disabled placeholder="มหาวิทยาลัยราชภัฏสวนสุนันทา" />
       </div>
       <h4>ชื่อหลักสูตร</h4>
       <div className="card">
          <AutoComplete disabled placeholder="วิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์" />
       </div>
       <h4>ประจำปีการศึกษา</h4>
          <Dropdown value={activeMenuItemDrop} onChange={(e) => setActiveMenuItemDrop(e.value)} options={items} virtualScrollerOptions={{ itemSize: 38 }} 
              placeholder="Select Item" className="w-full md:w-14rem" />
            <h4>ชื่อหลักสูตร (ภาษาไทย)</h4>
            <div className="card">
             <AutoComplete disabled placeholder="หลักสูตรวิศวกรรมศาสตร์บัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์" />
            </div>
            <h4>ชื่อย่อ</h4>
            <div className="card">
             <AutoComplete disabled placeholder="วศ.บ. (วิศวกรรมคอมพิวเตอร์)" />
            </div>
            <h4>ชื่อหลักสูตร (ภาษาอังกฤษ)</h4>
            <div className="card">
             <AutoComplete disabled placeholder="Bachelor of Engineering Program in Computer Engineering" />
            </div>
            <h4>คณะ</h4>
            <div className="card">
             <AutoComplete disabled placeholder="เทคโนโลยีอุตสาหกรรม มหาวิทยาลัยราชภัฏสวนสุนันทา" />
            </div>
      </div>
      <Button type="submit" label="Submit" className="mt-2" />
    </div>
       )}
{/*================*/}
       {activeMenuItem === 'จัดทำมคอ.7 หมวดที่ 1' && (
      <div>
        <h1>{activeMenuItem}</h1>
          <div className=''>
            <h3>หมวดที่ 1 ข้อมูลทั่วไป</h3>
            <h4>1.ชื่อหลักสูตร</h4>
            <h4>ชื่อหลักสูตร (ภาษาไทย)</h4>
            <div className="card">
             <AutoComplete disabled placeholder="หลักสูตรวิศวกรรมศาสตร์บัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร์" />
            </div>
            <h4>ชื่อย่อ</h4>
            <div className="card">
             <AutoComplete disabled placeholder="วศ.บ. (วิศวกรรมคอมพิวเตอร์)" />
            </div>
            <h4>ชื่อหลักสูตร (ภาษาอังกฤษ)</h4>
            <div className="card">
             <AutoComplete disabled placeholder="Bachelor of Engineering Program in Computer Engineering" />
            </div>
            <h4>คณะ</h4>
            <div className="card">
             <AutoComplete disabled placeholder="เทคโนโลยีอุตสาหกรรม มหาวิทยาลัยราชภัฏสวนสุนันทา" />
            </div>
          </div>
      </div>
       )}
{/*================*/}
       {activeMenuItem === 'จัดทำมคอ.7 หมวดที่ 2' && (
      <div>
        <h1>{activeMenuItem}</h1>
      </div>
       )}
{/*================*/}
       {activeMenuItem === 'จัดทำมคอ.7 หมวดที่ 3' && (
      <div>
        <h1>{activeMenuItem}</h1>
      </div>
       )}
{/*================*/}
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