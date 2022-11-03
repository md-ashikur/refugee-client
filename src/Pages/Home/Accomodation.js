import React from 'react';

const Accomodation = ({accomodation}) => {

    const {image, people, rooms, city, from, to, email, phone, title, description} = accomodation;
    

    return (
       
            <div className="lg:p-8 p-5 rounded-lg my-10 mx-5 h-auto lg:w-3/4 shadow-lg ">
        <div className="grid lg:grid-cols-2 gap-3">
          <div>
            {/* ------------picture input----------- */}
            <b className="text-4xl">{title}</b>
            <div className="w-full my-3">
              <img src={image} alt="" />
            </div>

            <div className="grid lg:grid-cols-2 gap-3 ">
              {/* ------------Number of People----------- */}
              <p><b> Number of People :</b> {people}</p>

              {/* ------------available rooms---------- */}

              <p> <b>Available Rooms :</b> {rooms}</p>
            </div>

            {/* ------------------city------------- */}

            <p className="my-3">
              <b>City : </b> {city}
            </p>

            {/* ------------date---------------- */}
            <div className="grid grid-cols-2 gap-3">
              <p><b>From :</b> {from}</p>

              <p><b>To :</b> {to}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-3 my-3">
              {/* ------------Email----------- */}
              <p><b> Email :</b> {email}</p>

              {/* ------------Phone number---------- */}

              <p> <b>Phone :</b> {phone}</p>
            </div>
          </div>

          {/* =================================== */}

          {/* -------------------- description ----------------------- */}
          <div className="p-3">
            <p>
              {description}
            </p>
          </div>
        </div>
     
      </div>
        
    );
};

export default Accomodation;