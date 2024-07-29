import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="w-full absolute bg-gradient-to-b from-black z-10 flex justify-between items-center p-4">
      <img className="w-44" src={LOGO} alt="logo" />
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
