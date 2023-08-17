// import { Accordion, AccordionTab } from 'primereact/accordion';
// import { Fieldset } from 'primereact/fieldset';
import './Mainpage.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';
// import 
import myImage1 from './myImage1.png';
import Activity from './Activity'
import Header from '../components/Header';
import React, { useState, useEffect, useRef  } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { ProductService } from '../service/ProductService';
import { AssessmentService } from '../service/AssessmentService';
import { ExtrapointsService } from '../service/ExtrapointsService';
import { Checkbox } from "primereact/checkbox";
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

function Mainpage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('หน้าแรก');
  const [products, setProducts] = useState([]);
  const [Extrapoints, setExtrapoints] = useState([]);
  const [Assessment, setAssessment] = useState([]);
  const [selectedExtrapoints, setSelectedExtrapoints] = useState([]);
  const [rowClick, setRowClick] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = useState(false);
  const toast = useRef(null);
  
  //ฟังก์ในส่วนของการปิดหน้าต่าง
  const handleClose = () => {
    setOpen(false);
  };
  //////////////////////////////////////////////////////////////////////////////////    การโชว์เมื่อกดบันทึกสำเร็จ    //////////////////////////////////////////////////////////////////////////
  const ShowToastSuccess = () => {
    toast.current.show({
      severity: 'success',
      summary: 'บันทึกข้อมูลเสร็จสิ้น',
      life: 3000,
      style: {
        fontFamily: 'Kanit',
        fontSize: '16px'
      }
    });
    handleClose();
    setVisible(false);
  };

  /////////////////////////////////////////////////////////////////////////////    ส่วนของการ Upload รูปภาพของ คะแนนพิเศษ     //////////////////////////////////////////////////////////////////////
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB in bytes

const isImageFileValid = (file) => {
  const allowedTypes = ['image/jpeg', 'image/png'];
  return allowedTypes.includes(file.type) && file.size <= MAX_FILE_SIZE;
};

const uploadImage = (event, rowData) => {
  const file = event.files[0];
  
  if (!file || !isImageFileValid(file)) {
    console.log('Invalid file. Please upload a valid image file (jpg or png) not exceeding 10 MB.');
    return;
  }

  const reader = new FileReader();

  reader.onload = (e) => {
    console.log('Uploading image for row:', rowData);
    console.log('Image data:', e.target.result);
  };

  reader.readAsDataURL(file);
};

const imageUploadTemplate = (rowData) => {
  return (
    <div>
      {rowData.picture ? (
        <img src={rowData.picture} alt="รูปภาพ" style={{ width: '100px' }} />
      ) : (
        <FileUpload
          mode="basic"
          chooseLabel="เลือกรูปภาพ"
          className="p-button-rounded p-button-outlined p-button-secondary"
          customUpload={true}
          uploadHandler={(e) => uploadImage(e, rowData)}
          accept="image/jpeg, image/png"
          maxFileSize={MAX_FILE_SIZE}
        />
      )}
    </div>
  );
};

  
  //////////////////////////////////////////////////////////////////////////////   ปุ่ม ประเมิน    ///////////////////////////////////////////////////////////////////////////// 
  const actionTemplate = () => (
    <Button label="ประเมิน" onClick={() => setVisible(true)} />
  );

  /////////////////////////////////////////////////////////////////////////////   กล่องติ๊กถูก     //////////////////////////////////////////////////////////////////////////////
  const actionTemplate1 = (rowData, fieldName) => (
    <Checkbox
      onChange={() => handleCheckboxChange(rowData, fieldName)}
      checked={rowData[fieldName]}
    />
  );
  const handleCheckboxChange = (rowData, fieldName) => {
    const updatedData = Assessment.map((item) => {
      const updatedItem = { ...item };
      if (item === rowData) {
        updatedItem[fieldName] = !updatedItem[fieldName]; // สลับค่าฟิลด์ที่ต้องการติ๊ก
      } else if (updatedItem[fieldName]) {
        updatedItem[fieldName] = false; // ยกเลิกติ๊กฟิลด์ในแถวนั้นทั้งหมด
      }
      return updatedItem;
    });
  
    setAssessment(updatedData);
  };
  
    useEffect(() => {
      ExtrapointsService.getExtrapoints().then(data => setExtrapoints(data));
    }, []);
    
    useEffect(() => {
      AssessmentService.getAssessmentMini().then(data => setAssessment(data));
    }, []);

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
          <img src={myImage1} alt="รูปภาพ" className="image" />
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
          <div className="card">
            <DataTable value={Extrapoints} selectionMode="single" selection={selectedExtrapoints} onSelectionChange={(e) => setSelectedExtrapoints(e.value)} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
                <Column field="clause" header="ข้อ"></Column>
                <Column field="list" header="ชื่อแบบประเมิน"></Column>
                <Column field="points" header="คะแนน"></Column>
                <Column field="pictrue" header="รูปภาพ" body={imageUploadTemplate} ></Column>
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
            </DataTable>
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>              
            <Button type="submit" label="ส่งแบบประเมิน" className="w-full md:w-14rem" />
            </div>
        </div>
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
            <Dialog  header="ประเมินการเรียนการสอน มหาวิทยาลัยราชภัฎสวนสุนันทา ปีการศึกษา : 2566 ภาคการศึกษา 1 " visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}> 
        <div>
        <DataTable value={Assessment} showGridlines tableStyle={{ minWidth: '50rem' }}>
                <Column field="clause" header="ข้อ"></Column>
                <Column field="list" header="รายการประเมิน"></Column>
                <Column field="very good" header="ดีมาก" body={(rowData) => actionTemplate1(rowData, 'very good')}></Column>
                <Column field="good" header="ดี" body={(rowData) => actionTemplate1(rowData, 'good')}></Column>
                <Column field="moderate" header="ปานกลาง" body={(rowData) => actionTemplate1(rowData, 'moderate')}></Column>
                <Column field="fair" header="พอใช้" body={(rowData) => actionTemplate1(rowData, 'fair')}></Column>
                <Column field="amend" header="ปรับปรุง" body={(rowData) => actionTemplate1(rowData, 'amend')}></Column>
        </DataTable>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                   <Toast ref={toast} />
            <div className="flex flex-wrap gap-2">
                <Button label="บันทึก" className="p-button-success" onClick={()=>{
             handleClose();
             ShowToastSuccess();
            }} />
            </div>
        </div>
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