import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Photos from './pages/Photos/Photos';
import Letter from './pages/Letter/Letter';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Router>
       

    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/photos' element={<Photos />}></Route>
      <Route exact path='/letter' element={<Letter />}></Route>
    </Routes>
    </Router>
   </>
  )
}

export default App
