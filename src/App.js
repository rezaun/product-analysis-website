import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews'
import Blog from './Components/Blog/Blog'
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Charts from './Components/Charts/Charts'
import About from './Components/About/About';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/charts' element={<Charts/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
