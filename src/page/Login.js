// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// /*Bootstrap*/ 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// /*Component*/
import myImage1 from './myImage1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
//npm install react-icons

import { FaUserAlt } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import Axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Login() {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3001/test", {
      email: email,
      password: password,
      status : status,
    }).then((response) => {
      if (response.data.message) {
        MySwal.fire({
          title: <strong>อีเมลหรือรหัสผ่านไม่ถูกต้อง!</strong>,
          icon: 'error',
          timer: 2000
        })
        return email;
      }
      else {
        MySwal.fire({
          title: <strong>ล็อคอินสำเร็จ!</strong>,
          icon: 'success',
          timer: 2000
        }).then((response) => {
          navigate('/Mainpage');
        });
        setUserEmail(email);
        navigate('/Mainpage');
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
      <div className="wrapper fadeInDown">
      <div id="formContent">
        {/* Login Form */}
        <div className="fadeIn first ">
          <img src={myImage1} alt="รูปภาพ" className="image" />
          <h5>ล็อคอิน</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <FaUserAlt className="fadeIn second" /><input
            type="text" required
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="E-mail"
            value={email}
            onChange={handleEmailChange}
          />
          <br />
          <FaLock className="fadeIn third" /><input
            type="password" required
            id="password"
            className="password fadeIn third"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <input type="submit" className="fadeIn fourth" value="เข้าสู่ระบบ" />
        </form>
      </div>
      <div>
        <div className="forgetpass">
          <Link className="underlineHover" >
            ลืมรหัสผ่าน
          </Link>
        </div>

      </div>

    </div>
    );
}

export default Login