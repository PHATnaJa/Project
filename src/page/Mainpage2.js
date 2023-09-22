import './Mainpage2.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';
// import 

import { AutoComplete } from "primereact/autocomplete";
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";           
import Header from '../components/Header';
import React, { useState, useEffect  } from 'react';

function Mainpage2() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('หน้าแรก');
  const [activeMenuItemDrop, setActiveMenuItemDrop] = useState(null);
  const [editableColumn, setEditableColumn] = useState(null);
  const [tableData, setTableData] = useState([
    { องค์ประกอบ: 'องค์ประกอบ 1', 'คะแนนการประเมินเฉลี่ย': 5, 'ระดับคุณภาพ': 'ดีมาก', หมายเหตุ: 'หมายเหตุ 1' },
    // เพิ่มข้อมูลอื่น ๆ ตามความต้องการ
  ]);
  const onCellEdit = (e) => {
    const updatedData = [...tableData];
    updatedData[e.index][e.field] = e.value;
    setTableData(updatedData);
  };
  const editorValidator = (props) => {
    const value = props.rowData[props.field];

    if (!value) {
      return { valid: false, message: `${props.field} is required.` };
    }

    return { valid: true };
  };

const onEditorOpen = (e) => {
  setEditableColumn(e.field);
};

const onEditorClose = () => {
  setEditableColumn(null);
};

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
          <li className={`menu-item ${activeMenuItem === 'จัดทำมคอ.7 คำนำ' ? 'active' : ''} center`}
            onClick={() => handleMenuItemClick('จัดทำมคอ.7 คำนำ')}
            >
            จัดทำมคอ.7 คำนำ
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
      {activeMenuItem === 'จัดทำมคอ.7 คำนำ' && (
      <div>
      <h1>{activeMenuItem}</h1>
      <div className=''>
      <Panel header="สร้างผลการดำเนินงาน">
        <div className='input-group' >
          <span>เริ่มวันที่</span>
          <input type="date"/>        
          <span>สิ้นสุดวันที่</span>
          <input type="date"/>
        </div>
        <div className='input-group' >
          <span>ประจำปีการศึกษา</span>
          <InputText value='2564' />
        </div>
      </Panel>
      <Panel header="เลือกหลักสูตร">
        <div className='input-group' >
          <span>ชื่อหลักสูตร(ภาษาไทย)</span>
          <InputText value='วิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมคอมพิวเตอร'/>
          <span>หลักสูตรปรับปรุงปี</span>
          <InputText value='2563'/>
        </div>
        <div className='input-group' >
          <span>ชื่อหลักสูตร(ภาษาอังกฤษ)</span>
          <InputText value='Bachelor of Engineering Program in Computer Engineering'/>
          <span>ชื่อย่อ</span>
          <InputText value='วศ.บ.(วิศวกรรมคอมพิวเตอร์)'/>
        </div>
        <div className='input-group' >
          <span>คณะ</span>
          <InputText value='คณะเทคโนโลยีอุตสาหกรรม'/>
          <span>มหาวิทยาลัย</span>
          <InputText value='มหาวิทยาลัยราชภัฏสวนสุนันทา'/>
        </div>
        <div className='input-group' >
          <span>ปีเกณฑ์มาตรฐานหลักสูตร</span>
          <InputText value='2558'/>
        </div>
      </Panel>
      <Panel header="บทสรุปผู้บริหาร">
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <InputTextarea autoResize rows={4} cols={80}  value='' />
        </div>
      </Panel>
      <Panel header="สรุปผลการประเมินตนเองตามองค์ประกอบ">
        <div className="datatable-wrapper">
        <DataTable value={tableData}>
          <Column field="องค์ประกอบ" header="องค์ประกอบ" />
          <Column
            field="คะแนนการประเมินเฉลี่ย"
            header="คะแนนการประเมินเฉลี่ย"
            editor={(props) => (
              <InputText
                type="number"
                {...props}
                onFocus={(e) => onEditorOpen(props)}
                onBlur={onEditorClose}
              ></InputText>
            )}
          />
          <Column field="ระดับคุณภาพ" header="ระดับคุณภาพ" />
          <Column field="หมายเหตุ" header="หมายเหตุ" />
        </DataTable>
        </div>
      </Panel>
      <Panel header="คำนำ">
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <span>คำนำ</span>
                  <InputTextarea autoResize rows={4} cols={80}  value='หลักสูตรวิศวกรรมศาสตรบัณฑิตสาขาวิชาวิศวกรรมคอมพิวเตอร์คณะเทคโนโลยีอุตสาหกรรม
มหาวิทยาลัยราชภัฏสวนสุนันทา จัดท ารายงานผลการด าเนินงานของหลักสูตร (มคอ. 7) ที่เป็นรายงาน 
การประเมินตนเอง(SelfAssessmentReport) ฉบับนี้ขึ้นมาเพื่อวิเคราะห์และประเมินผลการด าเนินงานตาม
เกณฑ์คุณภาพการศึกษาภายใน ประจ าปีการศึกษา 2564 (1 สิงหาคม 2564-31กรกฎาคม2565)
ภายใต้ระบบและกลไกการประกันคุณภาพ6องค์ประกอบ14ตัวบ่งชี้โดยการรวบรวมและสังเคราะห์ผลการ
ด าเนินงานของหลักสูตร ประจ าปีการศึกษา 2564 หวังเป็นอย่างยิ่งว่ารายงานผลการด าเนินงานของ
หลักสูตร (มคอ. 7) ที่เป็นรายงานการประเมินตนเอง (Self-Assessment Report) ฉบับนี้ จะสะท้อนผลการ
ด าเนินงาน จุดเด่น จุดที่ควรพัฒนา เพื่อเป็นโอกาสให้หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรม
คอมพิวเตอร์คณะเทคโนโลยีอุตสาหกรรมมหาวิทยาลัยราชภัฏสวนสุนันทาน าไปพัฒนาปรับปรุงคุณภาพ
การจัดการศึกษาสู่ความเป็นเลิศในอนาคตรวมทั้งเป็นการให้ความเชื่อมั่นแก่ผู้รับบริการและผู้มีส่วนได้ส่วน
เสียตลอดจนประชาชนทั่วไปต่อคุณภาพการจัดการศึกษาของหลักสูตรวิศวกรรมศาสตรบัณฑิตสาขาวิชา
วิศวกรรมคอมพิวเตอร์คณะเทคโนโลยีอุตสาหกรรมมหาวิทยาลัยราชภัฏสวนสุนันทาท้ายนี้ขอขอบคุณ
ผู้บริหารคณาจารย์และบุคลากรทุกฝ่ายที่ให้ความร่วมมือในการปฏิบัติงานและมีความมุ่งมั่นที่จะร่วมกัน
พัฒนาคุณภาพมาอย่างต่อเนื่องจนท าให้การด าเนินงานด้านการประกันคุณภาพการศึกษาภายในของ
หลักสูตรวิศวกรรมศาสตรบัณฑิตสาขาวิชาวิศวกรรมคอมพิวเตอร์คณะเทคโนโลยีอุตสาหกรรมมหาวิทยาลัย
ราชภัฏสวนสุนันทา ส าเร็จไปได้ด้วยดี
'/>
        </div>
        <br/>
        <span>ลงชื่อ</span>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <InputTextarea autoResize rows={4} cols={80}  value='อาจารย์ ผศ.ดร.รวิ อุตตมธนินทร์
ประธานหลักสูตรวิศวกรรมศาสตรบัณฑิต 
สาขาวิชาวิศวกรรมคอมพิวเตอร์
วันที่ 31 กรกฎาคม พ.ศ. 2564'/>
        </div>
      </Panel>
      <Panel header="ประวัติความเป็นมาของหลักสูตร">
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <InputTextarea autoResize rows={4} cols={80}  value='' />
        </div>
      </Panel>
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