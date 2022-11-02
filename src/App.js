import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Accomodation from './Pages/AddAccomodation/Accomodation';
import Login from './Pages/Login/Login';
import Register from './Pages/SignUp/Register';


function App() {
 

  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addAccomodation" element={<Accomodation/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        
      </Routes>
    </div>
  );
}

export default App;
