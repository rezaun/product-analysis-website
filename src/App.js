import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews'
import Blog from './Components/Blog/Blog'
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
