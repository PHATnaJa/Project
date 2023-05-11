import './App.css';
/*Bootstrap*/ 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

/*Component*/

import Login from './page/Login';
import Mainpage from './page/Mainpage';
import Profile from './page/Profile';

import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/mainpage" element={<Mainpage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
  </>
  );
}
export default App;
