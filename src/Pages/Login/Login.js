import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import auth from "../../firebase.init";
import Loading from "../../Components/Loading/Loading";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const [signInWithEmailAndPassword, user, loading, LoginError] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // Navigate=====================
  const nevigate = useNavigate();

  //passwordShown==========================
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  let signInError;

  if (user) {
    nevigate("/home");
  }
  if (LoginError) {
    signInError = <p className="text-red-500 text-xs">User not found</p>;
  }
  if (loading) {
    return <Loading></Loading>;
  }

  const onSubmit = async (data) => {
   
    await signInWithEmailAndPassword(data.email, data.password);
  };

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
                type="email"
                className="border-b-2 slate-700 outline-0 py-2"
                placeholder="Email*"
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide valid Email",
                  },
                })}
              />
              <p className="text-red-500 text-xs">{errors.email?.message}</p>

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
                <AiFillEye
                  onClick={togglePassword}
                  className="absolute right-3 top-4 text-xl hover:text-primary"
                />
              </div>
              <p className="text-red-500 text-xs">{errors.password?.message}</p>

              {signInError}
              <input
                type="submit"
                value={t("login")}
                className="bg-primary transition duration-150 ease-in-out hover:scale-[0.97] text-white py-3 rounded"
              />
              <Link
                to="/forgotPass"
                className="text-center hover:text-[#3b5998]"
              >
                {t("forgotPass")}
              </Link>
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
