import React, {  useState } from "react";
import { useForm} from "react-hook-form";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";


const Register = () => {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [
    createUserWithEmailAndPassword,
    user,
  ] = useCreateUserWithEmailAndPassword(auth);


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);


  const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  if (user) {

    console.log(user)

  }
  return (
    <div className=" flex justify-center items-center">
      <div className="lg:w-1/2  rounded-lg my-10 mx-5">


        <div className="min-h-fit lg:px-16 rounded-lg shadow-2xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold py-3">Create Account</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid lg:grid-cols-1 gap-2"
            >
              {/* ============UserName input============ */}
              <input
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Username*"
                className="border-b-2 slate-700 outline-0 py-2"
                {...register("username", {
                  maxLength: 20,
                  required: {
                    value: true,
                    message: "username is required",
                  },
                })}
              />
              <p className="text-red-500 text-xs">
                {errors.username?.message}
              </p>
             <div className="grid grid-cols-2 gap-5">
               {/* ==========first Name input=========== */}
              <div className="flex-col">
              <input
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name*"
                className="border-b-2 slate-700 w-full outline-0 py-2"
                {...register("firstName", {
                  maxLength: 20,
                  required: {
                    value: true,
                    message: "First Name is required",
                  },
                })}
              />
              <p className="text-red-500 text-xs">
                {errors.firstName?.message}
              </p>
              </div>
              {/* ==========Last Name input=========== */}
              <div className="flex-col ">
              <input
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name*"
                className="border-b-2 slate-700 w-full outline-0 py-2"
                {...register("lastName", {
                  maxLength: 20,
                  required: {
                    value: true,
                    message: "Last Name is required",
                  },
                })}
              />
              <p className="text-red-500 text-xs">
                {errors.lastName?.message}
              </p>
              </div>
             </div>


              {/* ================email input==== */}
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="border-b-2 slate-700 outline-0 py-2"
                placeholder="Email Address*"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email Address is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide valid Email",
                  },
                })}
              />
              <p className="text-red-500 text-xs">{errors.email?.message}</p>


              {/* ================password input=========== */}
              <div className=" relative">
                <input
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
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
              <p className="text-red-500 text-xs">
                {errors.password?.message}
              </p>





              <input
                onClick={() => createUserWithEmailAndPassword(userName, firstName, lastName, email, password)}
                type="submit"
                value="Create Account"
                className="bg-primary transition duration-150 ease-in-out hover:scale-[0.97] text-white py-3 rounded"
              />
            </form>

            <p className="text-center py-5 text-slate-700">
              Already have an account?
              <Link to="/login">
                <span className="text-primary"> Log In</span>
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;