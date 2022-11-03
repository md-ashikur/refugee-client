import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Accomodation from './Pages/AddAccomodation/AddAccomodation';
import Login from './Pages/Login/Login';
import Register from './Pages/SignUp/Register';
import Edit from './Pages/Edit/Edit';


function App() {
 

  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addAccomodation" element={<Accomodation/>} />
        <Route path="/edit" element={<Edit/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        
      </Routes>
    </div>
  );
}

export default App;
