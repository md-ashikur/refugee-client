
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Edit = ({ accomodation }) => {
  const { t } = useTranslation();
  const [accomodations, setAccomodations] = useState([]);
  const {
    image,
    people,
    rooms,
    city,
    from,
    to,
    email,
    phone,
    title,
    description,
  } = accomodation;

  const {
    register,
    formState: { errors },
    handleSubmit,
    
  } = useForm();

  // Edit accomodation===============================
  const imgStrogeKey = "baaf690471e7b0f1c00bcea99f84d257";
  const onSubmit = async (data, id) => {
    console.log(data);

    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgStrogeKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const accomodation = {
            image: img,
            people: data.people,
            rooms: data.rooms,
            city: data.city,
            from: data.from,
            to: data.to,
            email: data.email,
            phone: data.phone,
            title: data.title,
            description: data.description,
          };
          // send to database
          fetch(`http://localhost:5000/accomodations/${id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(accomodation),
          })
            .then((res) => res.json())
            .then((updated) => {
              if (updated.insertedId) {
                toast.success("Accomodation Updated successfully");
              } else {
                toast.error("Error adding accomodation");
              }
            });
        }
        console.log(result);
      });
  };

  // delete accomoation===========================
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete this?");
    if (proceed) {
      const url = `http://localhost:5000/accomodations/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deleteCount > 0) {
            console.log(data);
            toast.warning("Successfully deleted", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
            const remaining = accomodations.filter(
              (accomodation) => accomodation._id !== id
            );
            setAccomodations(remaining);
          }
        });
    }
  };

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
                  defaultValue={people}
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
                  defaultValue={rooms}
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

            {/* ----------cancle & Add button---------------- */}
            <div className="grid lg:grid-cols-2 gap-3 my-3">
              <input
                type="submit"
                value={t("edit")}
                className="btn bg-primary hover: border-0 text-white"
              />
              <Link to="" className="lg:order-first">
                <button
                  onClick={() => handleDelete(accomodation._id)}
                  
                  className="btn bg-red-500 border-0 hover:bg-red-600 text-white w-full"
                >{t("delete")}</button>
              </Link>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Edit;
