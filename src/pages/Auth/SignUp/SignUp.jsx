// import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// toastify
import { toast } from "react-toastify";

// toastify

// social icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
// social icons
// css file
import { signUp, socialIcons } from "./signUp.module.css";
// css file

// auth import start
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithFacebook,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.config";
import Loading from "../../../Components/Loading/Loading";
import FireBaseError from "../../../Components/fireBaseError/FireBaseError";

// auth import end

const SignUp = () => {
  const navigate = useNavigate();
  // authentication start
  // google auth start
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  //google auth start

  // update profile start
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  // update profile end

  // github login start
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  // github login end

  // facebook  login start
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);
  // facebook  login end

  // crate user start
  const [createUserWithEmailAndPassword, user, userLoading, userError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  // crate user end

  const handleGoBack = () => {
    navigate(-1);
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.Cpassword.value;

    console.log(displayName, email, password, confirmPassword);

    if (password !== confirmPassword) {
      return toast.error("Password Not Match!");
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
  };

  // conditon

  // loading cmp
  if (
    googleLoading ||
    userLoading ||
    updating ||
    githubLoading ||
    facebookLoading
  ) {
    return <Loading />;
  }
  // error

  if (googleError || userError || updateError || githubError || facebookError) {
    if (googleError) {
      return <FireBaseError errorMessege={googleError} />;
    }
    if (userError) {
      return <FireBaseError errorMessege={userError} />;
    }
    if (updateError) {
      return <FireBaseError errorMessege={updateError} />;
    }
    if (githubError) {
      return <FireBaseError errorMessege={githubError} />;
    }
    if (facebookError) {
      return <FireBaseError errorMessege={facebookError} />;
    }
  }

  if (googleUser || user || githubUser || facebookUser) {
    navigate("/");
    toast.success("Sign Up Successfully!");
  }

  return (
    <div>
      <div className={signUp}>
        <h1>Sign Up</h1>
        <p>
          Already have an account? <NavLink to="/login">Sign In</NavLink>
        </p>
        <form onSubmit={handleSignUp}>
          <div>
            <label htmlFor="email">Full Name:</label>
            <input required type="text" name="name" id="fullname" />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              required
              min="6"
              max="9"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div>
            <label htmlFor="cpassword">Confirm password:</label>
            <input
              required
              min="6"
              max="9"
              type="password"
              name="Cpassword"
              id="cpassword"
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div className={socialIcons}>
          <button onClick={() => signInWithGoogle()}>
            <span>
              <FcGoogle />
            </span>{" "}
            Sign up with Google
          </button>
          <button onClick={() => signInWithFacebook()}>
            <span style={{ color: "#0d97ff" }}>
              <FaFacebookF />
            </span>{" "}
            Sign up with Facebook
          </button>
          <button onClick={() => signInWithGithub()}>
            <span>
              <FaGithub />
            </span>{" "}
            Sign up with Github
          </button>
        </div>
        <div>
          <button
            style={{
              border: "none",
              padding: "8px 10px",
              background: "#27ae60",
              color: "#fff",
              borderRadius: "5px",
            }}
            onClick={handleGoBack}
          >
            <FaArrowLeft /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
