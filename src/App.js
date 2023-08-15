import './App.css';
/*Bootstrap*/ 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

/*Component*/

import Login from './page/Login';
import Mainpage from './page/Mainpage';
import Mainpage2 from './page/Mainpage2';
import Profile from './page/Profile';

import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/mainpage" element={<Mainpage />} />
      <Route path="/mainpage2" element={<Mainpage2 />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
  </>
  );
}
export default App;
