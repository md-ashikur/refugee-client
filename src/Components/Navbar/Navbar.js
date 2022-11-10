import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoAddCircleOutline, IoLanguage } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { IoMdLogIn } from "react-icons/io";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };

  // language====================
const { t, i18n} = useTranslation();

const handleChangeLng = (lng) => {
  i18n.changeLanguage(lng);
  localStorage.setItem("lng", lng);
}
  return (
    <div>
      <div className="navbar lg:px-10 px-5 fixed  bg-primary py-5 z-50">
        <div className="flex-1">
          <Link to="/home" className=" text-white font-bold lg:text-xl">
            {t("refugee")}
          </Link>
        </div>

        <div className="flex gap-4">
          {/* ===================== Add Accomodation ================ */}
         { user ? ( <NavLink
            to="addAccomodation"
            className="flex flex-col items-center text-white"
          >
            <IoAddCircleOutline className="text-3xl " />
            <p className="hidden lg:block text-xs pt-1">{t("addAccomodation")}</p>
          </NavLink>): (<></>)

         }

          {/* ==================== Language ===============   */}
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="flex flex-col items-center text-white"
            >
              <div className="">
                <IoLanguage className="text-3xl" />
              </div>
              <p className="pt-1 text-xs  hidden lg:block">{t("language")}</p>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={() => handleChangeLng("uk")} >
                <Link>український</Link>
              </li>
              <li  onClick={() => handleChangeLng("en")}>
                <Link>English</Link>
              </li>
              <li  onClick={() => handleChangeLng("de")}>
                <Link>Deutsch</Link>
              </li>
            </ul>
          </div>
          {/* =================Profile ========= */}
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="text-white">
                <CgProfile className="text-3xl " />
                <p className="pt-1 text-xs  hidden lg:block">{t("profile")}</p>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
               
                <li>
                  <Link to="edit">{t("editListings")}</Link>
                </li>
                <li>
                  <Link to="login" onClick={handleSignOut}>
                    {t("logout")}
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="login" className="flex flex-col items-center text-white">
              <IoMdLogIn className="text-3xl" />
              <p className="pt-1 text-xs  hidden lg:block">{t("login")}</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
