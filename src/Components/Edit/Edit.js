import { async } from "@firebase/util";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../../Context/Context";
const Edit = ({ post }) => {
  const { t } = useTranslation();
  const { user } = useContext(Context);
  const {
    numberOfPeople,
    numberOfRooms,
    city,
    from,
    to,
    email,
    phone,
    title,
    description,
  } = post;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Edit accommodation start===============================

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await axios.put(`/posts/${post._id}`, {
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
      });
      window.location.reload();
    } catch (err) {}
  };
  // Edit accommodation  end-----------------------------

  
  // delete accommoation start===========================
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.reload();
    } catch (err) {}
  };
  // delete accomoation end---------------------------
  return (
    <div className="lg:p-8 p-5 rounded-lg my-10 mx-5 h-auto lg:w-3/4 shadow-lg ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 gap-3">
          <div>
            {/* ------------picture input----------- */}

            <div className="flex-col">
              <input
                className="input w-full h-36 pt-16 lg:pl-32 pl-12"
                type="file"
                accept="image/*"
                {...register("image")}
                aria-invalid={errors.picture ? "true" : "false"}
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
                  defaultValue={numberOfPeople}
                  {...register("people", { required: true })}
                  aria-invalid={errors.people ? "true" : "false"}
                  placeholder="Number of People"
                />
                {errors.people?.type === "required" && (
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
                  defaultValue={numberOfRooms}
                  {...register("rooms", { required: true })}
                  aria-invalid={errors.rooms ? "true" : "false"}
                  placeholder="Available Rooms"
                />
                {errors.rooms?.type === "required" && (
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
                defaultValue={city}
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
                  defaultValue={from}
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
                  defaultValue={to}
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
                  defaultValue={email}
                  {...register("Email")}
                  placeholder="Email"
                />
              </div>

              {/* ------------Phone Number---------- */}
              <div className="flex-col">
                <input
                  className="input w-full"
                  type="tel"
                  defaultValue={phone}
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
                defaultValue={title}
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
                defaultValue={description}
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

            {/* ----------Edit & delete button---------------- */}

            {post.username === user?.username && (
              <div className="grid lg:grid-cols-2 gap-3 my-3">
                <input
                  type="submit"
                  value={t("edit")}
                  className="btn bg-primary hover: border-0 text-white"
                />
                <Link to="" className="lg:order-first">
                  <button
                    onClick={handleDelete}
                    className="btn bg-red-500 border-0 hover:bg-red-600 text-white w-full"
                  >
                    {t("delete")}
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Edit;
