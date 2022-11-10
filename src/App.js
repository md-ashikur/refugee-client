import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Accomodation from './Pages/AddAccomodation/AddAccomodation';
import Login from './Pages/Login/Login';
import Register from './Pages/SignUp/Register';
import NotFound from './NotFound/NotFound';
import EditListings from './Pages/Edit/EditListings';
import ForgotPass from './Pages/Login/ForgotPass';



function App() {
 


  return (
    <div className="">
 

      <Navbar/>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addAccomodation" element={<Accomodation/>} />
        <Route path="/edit" element={<EditListings/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/forgotPass" element={<ForgotPass/>} />
        
        <Route path="*" element={<NotFound/>} />
        
      </Routes>
    </div>
  );
}

export default App;
