import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Accomodation from './Pages/AddAccomodation/Accomodation';
function App() {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addAccom" element={<Accomodation/>} />
        
      </Routes>
    </div>
  );
}

export default App;
