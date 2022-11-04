import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Edit from './Edit';

const EditListings = () => {

  const [accomodations, setAccomodations] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/accomodations`)
    .then(res => res.json())
    .then(data => setAccomodations(data));
  }, []);
  
    return (
        <div className="flex flex-col justify-center items-center py-20">
        {
        accomodations.map( accomodation => <Edit
        key={accomodation._id}
        accomodation={accomodation}>

        </Edit>
        )
      }
      </div>
    );
};

export default EditListings;