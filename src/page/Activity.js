import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';


export default function BasicDemo() {
    const [selectedyear, setSelectedyear] = useState(null);
    const [selectedwork, setSelectedwork] = useState(null);
    const [selectedfaculty, setSelectedfaculty] = useState(null);
    const year = [
        { name: '2566', code: '66' },
        { name: '2565', code: '65' },
        { name: '2564', code: '64' },
        { name: '2563', code: '63' },
        { name: '2562', code: '62' }
    ];
    const Work = Array.from({ length: 10 }).map((_, i) => ({ label: `Item #${i}`, value: i }));
    const Faculty = Array.from({ length: 5 }).map((_, i) => ({ label: `Item #${i}`, value: i }));

    return (
        <div className="card flex justify-content-center">
  <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
    <div style={{ display: 'flex', gap: '10px' }}>
      <Dropdown
        value={selectedyear}
        onChange={(e) => setSelectedyear(e.value)}
        options={year}
        optionLabel="name"
        placeholder="เลือกปีการศึกษา"
        className="w-full md:w-14rem"
      />
      <Dropdown
        value={selectedwork}
        onChange={(e) => setSelectedwork(e.value)}
        options={Work}
        virtualScrollerOptions={{ itemSize: 38 }}
        placeholder="เลือกชนิดของงาน"
        className="w-full md:w-14rem"
      />
      <Dropdown
        value={selectedfaculty}
        onChange={(e) => setSelectedfaculty(e.value)}
        options={Faculty}
        virtualScrollerOptions={{ itemSize: 38 }}
        placeholder="เลือกคณะ"
        className="w-full md:w-14rem"
      />
    </div>
    <div style={{ marginTop: '10px' }}>
      <Button type="submit" label="ค้นหา" className="w-full md:w-14rem" />
    </div>
  </div>
</div>

)
}
        