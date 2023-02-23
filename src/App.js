import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservations" element={<Reservation />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
