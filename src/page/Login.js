// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// /*Bootstrap*/ 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// /*Component*/
import Footer from '../components/Footer'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { Link, Route, Routes,useNavigate } from "react-router-dom";
import React, {useState} from 'react';
import Axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Dialog } from 'primereact/dialog';

function Login() {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  }

  const hideDialog = () => {
    setVisible(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3001/project", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        MySwal.fire({
          title: <strong>อีเมลหรือรหัสผ่านไม่ถูกต้อง!</strong>,
          icon: 'error',
          timer: 2000
        })
      }
      else {
        MySwal.fire({
          title: <strong>ล็อคอินสำเร็จ!</strong>,
          icon: 'success',
          timer: 2000
        }).then((response) => {
          navigate('/');
        });
      }
    });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

// function Login() {
//     const navigate = useNavigate()
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       Axios.post("http://localhost:3000/project",{
//       email: email,
//       password: password,}).then((response) => {
//         if(response.data.message){
//           alert(response.data.message);
//         }
//         else{
//          alert('login ผ่าน');
//           navigate('/');
//         }
//           });
//             };
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   history.push('/mainpage');
    // };
  
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   // ทำการส่งข้อมูล email และ password ไปยังเซิร์ฟเวอร์
    //   // console.log(`Email: ${email}, Password: ${password}`);
    // };


  // const handleSubmit = async (event) => { // เพิ่ม async และ await
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:3000/login', {email,password
  //       });
  //     console.log(response.data); // ตัวอย่างการใช้งาน response
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  
    // const handleEmailChange = (event) => {
    //   setEmail(event.target.value);
    // };
  
    // const handlePasswordChange = (event) => {
    //   setPassword(event.target.value);
    // };
  
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
            <Link to = "/mainpage"><input type="submit" className="fadeIn fourth" value="เข้าสู่ระบบ" /></Link>
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

export default Login