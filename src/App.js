import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Navbar } from './Components/Navbar';
import { Navigation } from './Components/Navigation';
import { Contact } from './Components/Contact';
import { Career } from './Components/Career';
import { Project } from './Components/Project';
function App() {
  
  return (
    <div>
      <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='navigation' element={<Navigation/>}></Route>      
      <Route path='contact' element={<Contact/>}></Route>      
      <Route path='career' element={<Career/>}></Route>      
      <Route path='project' element={<Project/>}></Route>      

    </Routes>
    </div>
  );
  
}

export default App;
