import React, { useEffect, useState } from "react";
import Accomodation from "./Accomodation";
import "./Home.css";
const Home = () => {

  const [accomodations, setAccomodations] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/accomodations`)
    .then(res => res.json())
    .then(data => setAccomodations(data));
  }, []);

  return (
    <div className="flex justify-center flex-col items-center pt-20">
      {
        accomodations.map( accomodation => <Accomodation
        key={accomodation._id}
        accomodation={accomodation}>

        </Accomodation>
        ).reverse()
      }
    
    </div>
  );
};

export default Home;
