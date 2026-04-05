import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";
import { FaCartPlus } from "react-icons/fa";

function NavBar() {
  const [authUser, setauthUser] = useAuth();
  

  // search function
  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const [sticky, setstickey] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setstickey(true);
      } else {
        setstickey(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navItem = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/shop">Shop</a>
      </li>
      <li>
        <a href="men">Men</a>
      </li>
      <li>
        <a href="women">Women</a>
      </li>
      <li>
        <a href="kids">Kids</a>
      </li>
      {/* <li>
        <a href="contact">Contact</a>
      </li> */}
    </>
  );
  return (
    <>
      <div
        className={`max-w-screen-2xl container max-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
          sticky
            ? "sticky-navbar shadow-md bg-base-200 duration-300 transition all ease-in-out"
            : " "
        }`}
        style={{ boxShadow: sticky ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none" }}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItem}
              </ul>
            </div>
            <a className="btn btn-ghost text-2xl font-extrabold cursor-pointer">
              BuyBuddy
            </a>
          </div>
          <div className="navbar-end space-x-4">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 ">{navItem}</ul>
            </div>
            {/* search bar */}
            <div className="hidden md:block">
              <label className="px-3 py-2  border rounded-md flex items-center gap-2">
                <input
                  type="text"
                  className="grow outline-none"
                  placeholder="Search"
                  onChange={handleSearchChange}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />
               {/* Cart icon */}
            <div className="relative">
              <FaCartPlus
                className="text-2xl text-gray-700 hover:text-black transition duration-300 ease-in-out cursor-pointer"
              />
              <span
                className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
              >
                0
              </span>
              </div>
            </label>

            {authUser ? (
              <Logout />
            ) : (
              <div className="">
                <a
                  className="bg-black px-4 py-2 text-bold cursor-pointer p-2 rounded-md hover:bg-slate-800 text-white"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </a>
                <Login />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
