import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import 'react-toastify/dist/ReactToastify.css';

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (sending) {
    return <p>Sending...</p>;
  }
 
  return (
    <div className="py-40 flex justify-center">
       
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            htmlFor="my-modal-6"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">
            Are you sure you want to reset your password?
          </h3>

          <div class="modal-action ">
            <label
              htmlFor="my-modal-6"
              class="btn"
             
              onClick={async () => {
                await sendPasswordResetEmail(email);
                
                toast('Successfully email send', {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  })
               
              }}
            >
              Send reset Email
            </label>
          </div>
        </div>
      </div>

      <div class="form-control">
        <form>
          <label class="input-group">
            <input
              required
              type="email"
              value={email}
              placeholder="Enter Email"
              class="input input-bordered w-full max-w-xs rounded-lg"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="bg-primary">
              <label
                htmlFor="my-modal-6"
                class="submit modal-button text-white"
              >
                Email
              </label>
            </span>
          </label>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPass;
