import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Edit = ({ accomodation }) => {
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

  const [accomodations, setAccomodations] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/accomodations`)
      .then((res) => res.json())
      .then((data) => setAccomodations(data));
  }, []);

  // delete===========================
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
            alert("Successfully deleted");
            const remaining = accomodations.filter(
              (accomodation) => accomodation._id !== id
            );
            setAccomodations(remaining);
          }
        });
    }
  };
  const onSubmit = (data) => console.log(data);
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
                {...register("picture", { required: true })}
                aria-invalid={errors.picture ? "true" : "false"}
              />
              {errors.picture?.type === "required" && (
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
                  value={people}
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
                  value={rooms}
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
                value={city}
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
                  value={email}
                  {...register("Email")}
                  placeholder="Email"
                />
              </div>

              {/* ------------Phone Number---------- */}
              <div className="flex-col">
                <input
                  className="input w-full"
                  type="tel"
                  value={phone}
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
                value={title}
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
                value={description}
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
                value="Edit"
                className="btn bg-primary hover: border-0 text-white"
              />
              <Link to="" className="lg:order-first">
                <input
                  onClick={() => handleDelete(accomodation._id)}
                  value="Delete"
                  className="btn bg-red-500 border-0 hover:bg-red-600 text-white w-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Edit;
