import React from 'react';
import { useTranslation } from 'react-i18next';


const Accomodation = ({accomodation}) => {

    const {image, people, rooms, city, from, to, email, phone, title, description} = accomodation;
    const { t } = useTranslation();

    return (
       
        <div className="lg:p-8 p-5 rounded-lg my-10 mx-5 h-auto lg:w-4/5 shadow-lg ">
        <div className="grid lg:grid-cols-2 gap-3">
          <div>
            {/* ------------picture input----------- */}
            
            <b className="text-4xl break-words">{title}</b>
            <div className="w-full my-3">
              <img src={image} alt="" />
            </div>

            <div className="grid lg:grid-cols-2 gap-3 ">
              {/* ------------Number of People----------- */}
              <p><b> {t("numberOfPeople")} :</b> {people}</p>

              {/* ------------available rooms---------- */}

              <p> <b>{t("availableRooms")} :</b> {rooms}</p>
            </div>

            {/* ------------------city------------- */}

            <p className="my-3 break-words">
              <b>{t("city")} : </b> {city}
            </p>

            {/* ------------date---------------- */}
            <div className="grid grid-cols-2 gap-3">
              <p><b>{t("from")} :</b> {from}</p>

              <p><b>{t("to")} :</b> {to}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-3 my-3">
              {/* ------------Email----------- */}
              <p><b> {t("email")} :</b> {email}</p>

              {/* ------------Phone number---------- */}

              <p> <b>{t("phone")} :</b> {phone}</p>
            </div>
          </div>

          {/* =================================== */}

          {/* -------------------- description ----------------------- */}
          <div className="p-3 break-words">
            <p>
              {description}
            </p>
          </div>
        </div>
     
      </div>
        
    );
};

export default Accomodation;