import React from "react";
import { Link } from "react-router-dom";
import { IoAddCircleOutline, IoLanguage } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div>
      <div className="navbar lg:px-10 px-5  bg-primary py-5">
        <div className="flex-1">
          <Link to="/" className=" text-white font-bold lg:text-xl">
            Refugee Accomodation
          </Link>
        </div>

        <div className="flex gap-4">
          {/* ===================== Add Accomodation ================ */}
          <Link to="addAccom" className="flex flex-col items-center text-white">
            <IoAddCircleOutline className="text-3xl " />
            <p className="hidden lg:block text-xs pt-1">Add Accomodation</p>
          </Link>

          {/* ==================== Language ===============   */}
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="flex flex-col items-center text-white"
            >
              <div className="">
                <IoLanguage className="text-3xl" />
              </div>
              <p className="pt-1 text-xs  hidden lg:block">Language</p>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>English</Link>
              </li>
              <li>
                <Link>Deutsch</Link>
              </li>
            </ul>
          </div>
          {/* =================Profile ========= */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="text-white">
              <CgProfile className="text-3xl " />
              <p className="pt-1 text-xs  hidden lg:block">Profile</p>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>Edit</Link>
              </li>
              <li>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
