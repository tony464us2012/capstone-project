import './App.css'
import Header from './Components/Header'
import Homepage from './Components/pages/HomePage'
import About from './Components/pages/About'
import Order from './Components/pages/Order'
import Login from './Components/pages/Login.js'
import Confirmation from './Components/pages/Confirmation'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'
import BookingPage from './Components/pages/BookingPage'


function App() {
  return (
    <>
        <div id='body'>
          <Header />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/reservations" element={<BookingPage />} />
            <Route path="/order" element={<Order />} />
            <Route path="/login" element={<Login />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      <Footer />
    </>
  );
}

export default App;
