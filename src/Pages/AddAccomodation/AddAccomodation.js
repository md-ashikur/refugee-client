import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../../Context/Context";
import "./Accomodation.css";

const AddAccomodation = () => {
  const { t } = useTranslation();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleClick = () => reset();
  // ===========================
  const { user } = useContext(Context);
  const [file, setFile] = useState(null);
  // ======================================================================

  const onSubmit = async (data, e) => {
    const newPost = {
      username: user.username,
      numberOfPeople: data.numberOfPeople,
      numberOfRooms: data.numberOfRooms,
      city: data.city,
      from: data.from,
      to: data.to,
      email: data.email,
      phone: data.phone,
      title: data.title,
      description: data.description,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.new() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.image = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("/posts", newPost);
    } catch (err) {}
    window.location.replace("/");
  };

  return (
    <div className="flex justify-center py-20">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <div className="lg:p-8 p-5 rounded-lg my-10 mx-5 h-auto lg:w-3/4 shadow-lg ">
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="grid lg:grid-cols-2 gap-3">
            <div>
              {/* ------------picture input----------- */}

              <div className="flex-col">
                <input
                  className="input w-full h-36 pt-16 lg:pl-32 pl-12"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
                  {...register("image", { required: true })}
                  aria-invalid={errors.image ? "true" : "false"}
                />
                {errors.image?.type === "required" && (
                  <p role="alert" className="text-xs text-red-500">
                    Image is required
                  </p>
                )}
              </div>
              <div className="grid lg:grid-cols-2 gap-3 ">
                {/* ------------Number of People----------- */}
                <div className="flex-col">
                  <input
                    className="input w-full"
                    type="number"
                    {...register("numberOfPeople", { required: true })}
                    aria-invalid={errors.people ? "true" : "false"}
                    placeholder="Number of People"
                  />
                  {errors.numberOfPeople?.type === "required" && (
                    <p role="alert" className="text-xs text-red-500">
                      Number of People is required
                    </p>
                  )}
                </div>

                {/* ------------available rooms---------- */}
                <div className="flex-col">
                  <input
                    className="input w-full"
                    type="number"
                    {...register("numberOfRooms", { required: true })}
                    aria-invalid={errors.rooms ? "true" : "false"}
                    placeholder="Available Rooms"
                  />
                  {errors.numberOfRooms?.type === "required" && (
                    <p role="alert" className="text-xs text-red-500">
                      Available Rooms is required
                    </p>
                  )}
                </div>
              </div>

              {/* ------------------city------------- */}
              <div className="flex-col">
                <input
                  className="input w-full"
                  {...register("city", { required: true })}
                  aria-invalid={errors.city ? "true" : "false"}
                  placeholder="City"
                />
                {errors.city?.type === "required" && (
                  <p role="alert" className="text-xs text-red-500">
                    City is required
                  </p>
                )}
              </div>

              {/* ------------date---------------- */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex-col">
                  <p>From</p>
                  <input
                    className="input w-full"
                    type="date"
                    {...register("from", { required: true })}
                    aria-invalid={errors.from ? "true" : "false"}
                  />
                  {errors.from?.type === "required" && (
                    <p role="alert" className="text-xs text-red-500">
                      Date is required
                    </p>
                  )}
                </div>

                <div className="flex-col">
                  <p>To</p>
                  <input
                    className="input w-full"
                    type="date"
                    {...register("to", { required: true })}
                    aria-invalid={errors.to ? "true" : "false"}
                  />

                  {errors.to?.type === "required" && (
                    <p role="alert" className="text-xs text-red-500">
                      Date is required
                    </p>
                  )}
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-3 ">
                {/* ------------Email----------- */}
                <div className="flex-col">
                  <input
                    className="input w-full"
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                  />
                  {errors.email?.type === "required" && (
                    <p role="alert" className="text-xs text-red-500">
                      Email is required
                    </p>
                  )}
                </div>

                {/* ------------Phone Number---------- */}
                <div className="flex-col">
                  <input
                    className="input w-full"
                    type="tel"
                    {...register("phone")}
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
                  {...register("title", { required: true })}
                  aria-invalid={errors.title ? "true" : "false"}
                  placeholder="Title"
                />
                {errors.title?.type === "required" && (
                  <p role="alert" className="text-xs text-red-500">
                    Title is required
                  </p>
                )}
              </div>

              {/* -------------------- description ----------------------- */}
              <div className="flex-col">
                <textarea
                  className="input py-2 w-full h-64"
                  {...register("description", { required: true })}
                  aria-invalid={errors.description ? "true" : "false"}
                  placeholder="Property Description..."
                />
                {errors.description?.type === "required" && (
                  <p role="alert" className="text-xs text-red-500">
                    Property description is required
                  </p>
                )}
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
