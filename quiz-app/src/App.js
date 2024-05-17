
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home-page/Home';
import Navbar from './components/nav-bar/Navbar';
import About from './components/about-page/About';
import Loginpage from './components/login-page/Loginpage';
import Singup from './components/singup/Singup';
import Userprofile from './components/profile_page/Userprofile';
import Logout from './components/logout/Logout';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/about' element={<About/>}></Route>
     <Route path='/singup'element={<Singup/>}></Route>
     <Route path='/login'element={<Loginpage/>}></Route>
     <Route path='/profile'element={<Userprofile/>}></Route>
     
     </Routes>
    </div>
  );
}

export default App;

