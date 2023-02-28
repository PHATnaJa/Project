
import './App.css';
import { useState } from 'react';

/*bootstrap*/ 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


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
    <div className="wrapper fadeInDown">
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
    </div>
  );
}
function LoginPage() {
  return (
    <>
      <App/>
      <footer style={{ backgroundColor: 'rgb(215, 226, 243)'}}>
        <a style={{ backgroundColor: '#fff' , position: 'absolute', bottom: 0, left: 0, right: 0 }}> 
          ติดต่อผู้ดูแล : 08x-xxx-xxxx , หรือ Email - CE_SSRU@ssru.ac.th
        </a>
      </footer>
    </>
  );
}
export default LoginPage;