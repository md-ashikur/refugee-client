import React from "react";
import room from "../../Images/room.jpg";
import "./Home.css";
const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="lg:p-8 p-5 rounded-lg my-10 mx-5 h-auto lg:w-3/4 shadow-lg ">
        <div className="grid lg:grid-cols-2 gap-3">
          <div>
            {/* ------------picture input----------- */}
            <b className="text-4xl">Title here</b>
            <div className="w-full my-3">
              <img src={room} alt="" />
            </div>

            <div className="grid lg:grid-cols-2 gap-3 ">
              {/* ------------Number of People----------- */}
              <p><b> Number of People :</b> 5</p>

              {/* ------------available rooms---------- */}

              <p> <b>Available Rooms :</b> 2</p>
            </div>

            {/* ------------------city------------- */}

            <p className="my-3">
              <b>City : </b>  Grushevs'kyi Street,. Kyiv, 01008, Ukraine ·
            </p>

            {/* ------------date---------------- */}
            <div className="grid grid-cols-2 gap-3">
              <p><b>From :</b> 01.11.2022</p>

              <p><b>To :</b> 15.11.2022</p>
            </div>
            <p className="my-3">
              <b>Contact : </b> abcd@gmail.com
            </p>
          </div>

          {/* =================================== */}

          {/* -------------------- description ----------------------- */}
          <div className="p-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
              Officiis iure rerum voluptates a cumque velit quibusdam sed amet
              tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
              temporibus enim commodi iusto libero magni deleniti quod quam
              consequuntur! Commodi minima excepturi repudiandae velit hic
              maxime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
