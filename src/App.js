// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
// import Header from './components/Header';
import Navbar from './components/navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import {Routes, Route} from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                {/* <Route path= '/' element={<About/>}/> */}
                <Route path='/' element={<About/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/resume" element={<Resume/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
