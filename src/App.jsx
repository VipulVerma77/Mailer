// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AboutSection, Contact, Footer, Home, PayIn, PayOut } from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<AboutSection />} />
        <Route path="/payin" element={<PayIn />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/payout" element={<PayOut />} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;