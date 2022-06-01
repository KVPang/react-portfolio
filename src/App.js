import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import About from './components/About'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
   <Navbar/>
   <Routes>
  <Route path = '/' element={<About/>}></Route>
   </Routes>
    </div>
  );
}

export default App;
