import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { Context } from "../../Context/Context";
import axios from "axios";
import Loading from "../../Components/Loading/Loading";

const Login = () => {
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false)
  const { t } = useTranslation();
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  //passwordShown ==========================
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  // form onSubmit=======================
  const onSubmit = async (data) => {
    dispatch({ type: "LOGIN_START" });
    setError(false);
    try {
      const res = await axios.post("/auth/login", {
        username: data.username,
        password: data.password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(true);
    }
  };
  if(isFetching){
    <Loading></Loading>
  }

  return (
    <div className=" flex justify-center items-center py-28">
      <div className="lg:w-5/4 my-10">
        <div className="min-h-fit lg:px-5 rounded-lg shadow-2xl ">
          <div className="card-body">
            <h2 className="text-2xl font-bold py-3">{t("login")}</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-2"
            >
              <input
                type="text"
               
                className="border-b-2 slate-700 outline-0 py-2"
                placeholder="Username*"
                {...register("username", {
                  required: {
                    value: true,
                    message: "username is required",
                  },
                })}
              />
              <p className="text-red-500 text-xs">{errors.username?.message}</p>

              <div className=" relative">
                <input
                
                  type={passwordShown ? "text" : "password"}
                  className="border-b-2 w-full slate-700 outline-0 py-2"
                  placeholder="Password*"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
                      message:
                        "must contain at least 1 uppercase[A-Z], 1 lowercase[a-z], and 1 number",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be at least 6 characters long",
                    },
                  })}
                />
                {passwordShown ? (
                  <AiFillEye
                    onClick={togglePassword}
                    className="absolute right-3 top-4 text-xl text-primary"
                  />
                ) : (
                  <AiFillEye
                    onClick={togglePassword}
                    className="absolute right-3 top-4 text-xl hover:text-primary"
                  />
                )}
              </div>
              <p className="text-red-500 text-xs">{errors.password?.message}</p>

              <input
                type="submit"
                value={t("login")}
                className="bg-primary transition duration-150 ease-in-out hover:scale-[0.97] text-white py-3 rounded"
              />
                          {error && <p className="text-red-500 text-sm text-center">No user found</p>}
             
            </form>

            <p className="text-center py-5 text-slate-700">
              {t("dontHaveAccount")}
              <Link to="/register">
                <span className="text-primary"> {t("register")}</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
