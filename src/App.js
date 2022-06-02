// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './components/Header';
import Navbar from './components/navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import {Routes, Route} from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path= '/' element={<Header/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/resume" element={<Resume/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
