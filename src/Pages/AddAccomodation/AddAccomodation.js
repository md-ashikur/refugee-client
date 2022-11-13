import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../../Context/Context";
import "./Accomodation.css";

const AddAccomodation = () => {
  const { t } = useTranslation();

  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [numberOfRooms, setNumberOfRooms] = useState("");
  const [city, setCity] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleClick = (e) => {
    // window.location.reset()
  };
  // ===========================

  // ======================================================================

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      numberOfPeople,
      numberOfRooms,
      city,
      from,
      to,
      email,
      phone,
      title,
      description,
    };
    if (file) {
      const data = new FormData();
      const filename =   file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      console.log(data);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
       await axios.post("/posts", newPost);
window.location.replace("/");
    } catch (err) {}
    // window.location.replace("/");
  };

  return (
    <div className="flex justify-center py-20">
      <div className="lg:p-8 p-5 rounded-lg my-10 mx-5 h-auto lg:w-3/4 shadow-lg ">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid lg:grid-cols-2 gap-3">
            <div>
              {/* ------------picture input----------- */}

              <div className="flex-col">
                {file && (
                  <img
                    className="w-full max-h-80"
                    src={URL.createObjectURL(file)}
                    alt=""
                    required
                  />
                )}
                <input
                  className="input w-full py-2 lg:pl-32 pl-12"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
                  required
                />
              </div>
              <div className="grid lg:grid-cols-2 gap-3 ">
                {/* ------------Number of People----------- */}
                <div className="flex-col">
                  <input
                   required
                    className="input w-full"
                    type="number"
                    onChange={(e) => setNumberOfPeople(e.target.value)}
                    placeholder="Number of People"
                  />
                </div>

                {/* ------------available rooms---------- */}
                <div className="flex-col">
                  <input
                    className="input w-full"
                    type="number"
                    onChange={(e) => setNumberOfRooms(e.target.value)}
                    placeholder="Available Rooms"
                  />
                </div>
              </div>

              {/* ------------------city------------- */}
              <div className="flex-col">
                <input
                  className="input w-full"
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City"
                />
              </div>

              {/* ------------date---------------- */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex-col">
                  <p>From</p>
                  <input
                    className="input w-full"
                    type="date"
                    onChange={(e) => setFrom(e.target.value)}
                  />
                </div>

                <div className="flex-col">
                  <p>To</p>
                  <input
                    className="input w-full"
                    type="date"
                    onChange={(e) => setTo(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-3 ">
                {/* ------------Email----------- */}
                <div className="flex-col">
                  <input
                    className="input w-full"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>

                {/* ------------Phone Number---------- */}
                <div className="flex-col">
                  <input
                    className="input w-full"
                    type="tel"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>

            {/* =================================== */}

            <div>
              {/* -----------title------------- */}
              <div className="flex-col">
                <input
                  className="input w-full"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                />
              </div>

              {/* -------------------- description ----------------------- */}
              <div className="flex-col">
                <textarea
                  className="input py-2 w-full h-64"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Property Description..."
                />
              </div>

              {/* ----------cancle & Add button---------------- */}
              <div className="grid lg:grid-cols-2 gap-3 my-3">
                <input
                  type="submit"
                  value={t("add")}
                  className="btn bg-primary border-0 text-white"
                />
                <Link to="" className="lg:order-first">
                  <button
                  
                    onClick={handleClick}
                    className="btn text-white w-full"
                  >
                    {t("cancle")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddAccomodation;
