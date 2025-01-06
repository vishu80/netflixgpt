import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSignupButton = () => {
    setIsSignup(!isSignup);
  };
  console.log(isSignup, "check");
  return (
    <div>
      <Header />
      <div className="absolute top-0 left-0 right-0 bottom-0 ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg
"
          alt="bckground"
        />
      </div>
      <div className="absolute bg-black p-8 rounded-lg w-3/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-90">
        <form className="flex flex-col m-2 text-white">
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
            type="text"
            placeholder="Email"
            className="p-2 my-2 w-full h-16 rounded-lg bg-gray-700"
          />
          <input
            type="text"
            placeholder="Password"
            className="p-2 my-2 w-full h-16 rounded-lg bg-gray-700"
          />
          <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
          <p
            className="py-4 cursor-pointer"
            onClick={() => handleSignupButton()}
          >
            {isSignup ? "Already Registered ?Sign In Now" : "New to Netflix? Sign up now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
