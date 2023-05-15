// import { Accordion, AccordionTab } from 'primereact/accordion';
// import { Fieldset } from 'primereact/fieldset';
import './Mainpage.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';

import Header from '../components/Header';
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';

function Mainpage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('หน้าแรก');
  const [products, setProducts] = useState([]);

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
    <p>เนื้อหาของหน้าแรก </p>
        <div className="card">
            <DataTable value={products} paginator rows={2} tableStyle={{ minWidth: '40rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
  </div>
)}
      {activeMenuItem === 'ข้อมูล' && (
        <div>
          <h1>{activeMenuItem}</h1>
          <p>เนื้อหาของข้อมูล</p>
          <img src="/images/ce.png" alt="รูปภาพ" className="image" />
        </div>
      )}
      {activeMenuItem === 'กิจกรรม' && (
        <div>
          <h1>{activeMenuItem}</h1>
          <p>เนื้อหาของกิจกรรม</p>
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
          <p>เนื้อหาของแบบประเมิน</p>
        </div>
      )}
      </div>
    
      <div className="expand-button" onClick={handleSidebarToggle}>&#9776;</div>
    </div>
    
    
  );
}

export default Mainpage;