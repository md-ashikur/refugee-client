import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Accomodation.css";

const Accomodation = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex justify-center">
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
                    {...register("Email")}
                    placeholder="Email"
                  />
                  
                </div>

                {/* ------------Phone Number---------- */}
                <div className="flex-col">
                  <input
                    className="input w-full"
                    type="number"
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
                <Link to="/home">
                  <input value="Cancle" className="btn text-white w-full" />
                </Link>
                <input
                  type="submit"
                  value="Add"
                  className="btn bg-primary border-0 text-white"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Accomodation;
