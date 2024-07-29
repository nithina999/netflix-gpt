import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();

  const email = useRef();
  const password = useRef();
  const name = useRef();

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleForm = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMsg(message);

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {});
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMG} />
      </div>
      <div className="absolute w-full text-white">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black my-32 mx-auto w-3/12 p-10 bg-opacity-80 rounded-lg"
        >
          <h1 className="text-3xl my-3">{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {!isSignIn && (
            <input
              ref={name}
              className="w-full my-3 p-2 bg-gray-800"
              type="text"
              placeholder="Name"
            />
          )}
          <input
            ref={email}
            className="w-full my-3 p-2 bg-gray-800"
            type="email"
            placeholder="Email Address"
          />
          <input
            ref={password}
            className="w-full my-3 p-2 bg-gray-800"
            type="password"
            placeholder="Password"
          />
          <p className="text-red-700 font-bold">{errorMsg}</p>
          <button
            className="bg-red-700 rounded-lg w-full p-3 my-5"
            onClick={handleForm}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="my-2 cursor-pointer underline"
            onClick={toggleSignInForm}
          >
            {isSignIn
              ? "New to Netflix? Sign Up now"
              : "Already a user? Sign In now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
