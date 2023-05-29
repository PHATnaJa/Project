// import { Accordion, AccordionTab } from 'primereact/accordion';
// import { Fieldset } from 'primereact/fieldset';
import './Mainpage.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';
// import 
import Activity from './Activity'
import Header from '../components/Header';
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

function Mainpage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('หน้าแรก');
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);

  const actionTemplate = () => (
    <Button label="ประเมิน" onClick={() => setVisible(true)} />
  );

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

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
      {activeMenuItem === 'หน้าแรก' && (
  <div>
    <h1>{activeMenuItem}</h1>

        <div className="card">
            <DataTable value={products} paginator rows={10} tableStyle={{ minWidth: '40rem' }}>
                <Column field="code" header="ลำดับ"></Column>
                <Column field="headlines" header="หัวข้อข่าว"></Column>
                <Column field="name" header="สร้างโดย"></Column>
                <Column field="quantity" header="สร้างขึ้นเมื่อวันที่"></Column>
                <Column field="visit" header="การเข้าชม"></Column>
                <Column field="reply" header="การตอบกลับ"></Column>
            </DataTable>
        </div>
  </div>
)}
      {activeMenuItem === 'ข้อมูล' && (
        <div>
          <h1>{activeMenuItem}</h1>
          <div className='data'> 
            <h3>ชื่อ-นามสกุล</h3>
            <h3>รหัสนักศึกษา</h3>
            <h3>รหัสบัตรประชาชน</h3>
            <h3>คณะ</h3>
            <h3>สาขา</h3>
            <h3>รุ่นปีการศึกษา</h3>
            <h3>เพศ</h3>
            <h3>วันเกิด</h3>
            <h3>เบอร์โทรศัพท์</h3>
          </div>
        </div>
      )}
      {activeMenuItem === 'กิจกรรม' && (
        <div>
          <h1>{activeMenuItem}</h1>
          <h3>เลือกดูผลงานปีการศึกษา</h3>
          <Activity/>
        </div>
      )}
      {activeMenuItem === 'คะแนนพิเศษ' && (
        <div>
          <h1>{activeMenuItem}</h1>
          <p>เนื้อหาของคะแนนพิเศษ</p>
        </div>
      )}
      {activeMenuItem === 'แบบประเมิน' && (
        <div>
          <h1>{activeMenuItem}</h1>

          <div className="card">
            <DataTable value={products} paginator rows={10} tableStyle={{ minWidth: '40rem' }}>
                <Column field="code" header="ปีการศึกษา"></Column>
                <Column field="headlines" header="ภาคการศึกษา"></Column>
                <Column field="name" header="รหัสวิชา"></Column>
                <Column field="quantity" header="ชื่อ"></Column>
                <Column field="visit" header="อาจารย์"></Column>
                <Column field="reply" header="ดำเนินงาน" body={actionTemplate}></Column>
            </DataTable>

            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
        <p className="m-0">
          {/* เนื้อหาใน Dialog */}
        </p>
      </Dialog>
        </div>
        </div>
      )}
      </div>
    
      <div className="expand-button" onClick={handleSidebarToggle}>&#9776;</div>
    </div>
    
    
  );
}

export default Mainpage;