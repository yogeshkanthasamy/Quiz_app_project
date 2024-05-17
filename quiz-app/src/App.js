
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home-page/Home';
import Navbar from './components/nav-bar/Navbar';
import About from './components/about-page/About';
import Singup from './components/singup/Singup';
import Userloginpage from './components/login-page/Userloginpage';





function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/about' element={<About/>}></Route>
     <Route path='/singup'element={<Singup/>}></Route>
     <Route path='/Login'element={<Userloginpage/>}></Route>
     
     
     </Routes>
    </div>
  );
}

export default App;

