import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home-page/Home';
import Navbar from './components/nav-bar/Navbar';
import About from './components/about-page/About';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/about' element={<About/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
