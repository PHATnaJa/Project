
import './App.css';
import { useState } from 'react';

/*Bootstrap*/ 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

/*Component*/
import Footer from './components/footer'; 


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // ทำการส่งข้อมูล email และ password ไปยังเซิร์ฟเวอร์
    // console.log(`Email: ${email}, Password: ${password}`);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  return (
    <div className="wrapper fadeInDown" style={{ minHeight: "100vh" }}>
      <div id="formContent">
        {/* Login Form */}
        <div className="fadeIn first ">
          <img src="/images/ce.png" alt="รูปภาพ" className="image" />
          <h5>ล็อคอิน</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="E-mail"
            style={{ backgroundImage: `url('/images/user.png')`,backgroundPosition: '95%'  }}
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            id="password"
            className="Password fadeIn third"
            name="password"
            placeholder="Password"
            style={{ backgroundImage: `url('/images/password.png')`,backgroundPosition: '95%' }}
            value={password}
            onChange={handlePasswordChange}
          />
          <input type="submit" className="fadeIn fourth" value="เข้าสู่ระบบ" />
        </form>
      </div>
      <div className="forgetpass">
        <a className="underlineHover" href="#">
          ลืมรหัสผ่าน
        </a>
      </div>
      <Footer/>
    </div>
  );
}
export default App;
