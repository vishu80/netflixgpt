import React, { useEffect } from "react";
import { addUserDetails, signOutUser } from "../utlis/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utlis/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  LOGO_URL,
  options,
  POPULAR_MOVIES_URL,
  SUPPORTED_LANGUAGE,
} from "../utlis/constant";
import { toggleGptSearchView } from "../utlis/GptsearchSlice";
import { changeLanguage } from "../utlis/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((state) => state.gpt.toggleGpt);

  useEffect(() => {
    const unsubsCribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, uid } = user;

        dispatch(
          addUserDetails({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        // ...
      } else {
        dispatch(signOutUser());
        navigate("/");
        // User is signed out
        // ...
      }
    });

    return () => unsubsCribe();
  }, []);

  console.log(showGptSearch);

  const handleSignout = () => {
    dispatch(signOutUser());
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="relative px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-row justify-between items-center">
      <img className=" w-44 " src={LOGO_URL} alt="logo" />
      {userData && (
        <div className="flex p-2">
          {showGptSearch ? (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}{" "}
                </option>
              ))}
            </select>
          ) : (
            ""
          )}
          <button
            className="py-2 px-2 mx-2  bg-purple-500 text-white font-bold rounded-lg"
            onClick={() => handleGptSearch()}
          >
            {!showGptSearch ? "GPT Search" : "Home Page"}
          </button>
          <button
            className="h-8 w-24 bg-[#e50914] text-white font-bold rounded-lg"
            onClick={() => handleSignout()}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
