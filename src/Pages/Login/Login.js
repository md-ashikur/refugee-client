import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AiFillEye } from 'react-icons/ai';
import auth from "../../firebase.init";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
       
    ] = useSignInWithEmailAndPassword(auth);

    const [passwordShown, setPasswordShown] = useState(false);

    // Password toggle handler
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    if (user) {
        console.log(user);
    }

    return (
        <div className=" flex justify-center items-center">
            <div className="lg:w-5/4 my-10">



                <div className="min-h-fit lg:px-5 rounded-lg shadow-2xl ">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold py-3">Login</h2>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="grid grid-cols-1 gap-2"
                        >
                            <input
                                type="email"
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


                            <div className=" relative" >
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
                                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
                                            message: "must contain at least 1 uppercase[A-Z], 1 lowercase[a-z], and 1 number",
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "Must be at least 6 characters long",
                                        },
                                    })}
                                /><AiFillEye onClick={togglePassword} className="absolute right-3 top-4 text-xl hover:text-primary" />
                            </div>
                            <p className="text-red-500 text-xs">{errors.password?.message}</p>


                            <input
                                onClick={() => signInWithEmailAndPassword()}
                                type="submit"
                                value="Login"
                                className="bg-primary transition duration-150 ease-in-out hover:scale-[0.97] text-white py-3 rounded"
                            />
                            <a href="/" className="text-center hover:text-[#3b5998]">
                                Forgot Password?
                            </a>
                        </form>


                        <p className="text-center py-5 text-slate-700">
                            Don't have an account yet?
                            <Link to="/register">
                                <span className="text-primary"> Register</span>
                            </Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;