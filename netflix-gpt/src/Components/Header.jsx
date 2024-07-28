import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className="w-screen absolute bg-gradient-to-b from-black z-10 flex justify-between items-center p-4">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex">
          <button
            className="bg-red-700 text-white p-2 rounded-md"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          {/* <p className="text-white font-bold text-xl px-3 items-center">
            {user.displayName}
          </p> */}
        </div>
      )}
    </div>
  );
};

export default Header;
