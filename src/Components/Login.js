import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkForValidation } from "../utlis/validate";
import { auth } from "../utlis/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUserDetails } from "../utlis/userSlice";
import { useNavigate } from "react-router-dom";
import { IMAGE_BACKGROUND_URL } from "../utlis/constant";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [error, setErrorMessage] = useState(null);
  const email = useRef();
  const password = useRef();
  const handleSignupButton = () => {
    setIsSignup(!isSignup);
  };

  const handleSignButton = () => {
    const message = checkForValidation(
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);

    if (message != null) return;
    if (isSignup) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          const { email, displayName, photoURL } = user;
          dispatch(
            addUserDetails({
              email: email,
              displayName: displayName,
              // photoURL:photoURL,
            })
          );
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
          // ..
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
          const { email, displayName, photoURL } = user;
          dispatch(
            addUserDetails({
              email: email,
              displayName: displayName,
              // photoURL:photoURL,
            })
          );

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute top-0 left-0 right-0 bottom-0 ">
        <img
          src={IMAGE_BACKGROUND_URL}
          alt="bckground"
        />
      </div>
      <div className="absolute bg-black p-8 rounded-lg w-3/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-90">
        <form
          className="flex flex-col m-2 text-white"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="font-bold text-3xl py-3">
            {isSignup ? "Sign up" : "Sign In"}
          </h1>
          {isSignup && (
            <input
              type="text"
              placeholder="Name"
              className="p-2 my-2 w-full h-16 rounded-lg bg-gray-700"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="p-2 my-2 w-full h-16 rounded-lg bg-gray-700"
          />
          <input
            ref={password}
            type="text"
            placeholder="Password"
            className="p-2 my-2 w-full h-16 rounded-lg bg-gray-700"
          />
          {error && <p className="text-red-900">{error}</p>}
          <button
            className="p-4 my-4 bg-red-700 w-full rounded-lg"
            onClick={() => handleSignButton()}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
          <p
            className="py-4 cursor-pointer"
            onClick={() => handleSignupButton()}
          >
            {isSignup
              ? "Already Registered ?Sign In Now"
              : "New to Netflix? Sign up now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
