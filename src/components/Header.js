import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [userEmail, setUserEmail] = useState(""); 
  
  return (
    <header className="header">
      <div className="profile-info">
        <div className="profile-name">
          {userEmail && <p>ยินดีต้อนรับ, {userEmail}</p>}
          <p>Hello world !! สวัสดีชาวโลก</p>
        </div>
      </div>
    </header>
  );
}
export default Header;