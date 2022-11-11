import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Accomodation from "./Pages/AddAccomodation/AddAccomodation";
import Login from "./Pages/Login/Login";
import Register from "./Pages/SignUp/Register";
import NotFound from "./NotFound/NotFound";
import ForgotPass from "./Pages/Login/ForgotPass";
import EditPage from "./Pages/EditListingPage/EditPage";
import { useContext } from "react";
import { Context } from "./Context/Context";

function App() {
  const { user} = useContext(Context);
  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addAccomodation" element={<Accomodation />} />
        <Route path="/edit" element={user ?<EditPage/> : <Register /> } />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user? <Home /> : <Register />} />
        <Route path="/forgotPass" element={<ForgotPass />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
