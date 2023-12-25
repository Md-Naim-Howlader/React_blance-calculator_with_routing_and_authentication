import { NavLink, useNavigate } from "react-router-dom";
import { signUp, socialIcons } from "./signIn.module.css";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
  useSignInWithFacebook,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
// social icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import auth from "../../../firebase/firebase.config";
import Loading from "../../../Components/Loading/Loading";
// toastify
import { toast } from "react-toastify";
import FireBaseError from "../../../Components/fireBaseError/FireBaseError";

// social icons
const LogIn = () => {
  const navigate = useNavigate();

  // loginWithEmailAndPassword
  const [
    signInWithEmailAndPassword,
    user,
    emailPasswordLoading,
    emailPasswrdError,
  ] = useSignInWithEmailAndPassword(auth);
  // google login
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  // github login
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  // facebook  login start
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);
  // facebook  login end
  if (
    googleLoading ||
    githubLoading ||
    facebookLoading ||
    emailPasswordLoading
  ) {
    return <Loading />;
  }
  // error
  if (googleError || githubError || facebookError || emailPasswrdError) {
    if (googleError) {
      return <FireBaseError errorMessege={googleError} />;
    }

    if (githubError) {
      return <FireBaseError errorMessege={githubError} />;
    }
    if (facebookError) {
      return <FireBaseError errorMessege={facebookError} />;
    }
    if (emailPasswrdError) {
      return <FireBaseError errorMessege={emailPasswrdError} />;
    }
  }

  if (user || googleUser || githubUser || facebookUser) {
    navigate("/");
    toast.success("Log In Successfully!");
  }

  const handleSubmit = (e) => {
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email && password) {
      signInWithEmailAndPassword(email, password);
    }
  };

  return (
    <div style={{ padding: "50px 0" }}>
      <div className={signUp}>
        <h1>Log In</h1>
        <p>
          Don&apos;t have an account?{" "}
          <NavLink to="/signUp">Create a free account</NavLink>
        </p>
        <form onSubmit={handleSubmit}>
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

          <button type="submit">Log In</button>
        </form>
        <div className={socialIcons}>
          <button onClick={() => signInWithGoogle()}>
            <span>
              <FcGoogle />
            </span>{" "}
            Log in with Google
          </button>
          <button onClick={() => signInWithFacebook()}>
            <span style={{ color: "#0d97ff" }}>
              <FaFacebookF />
            </span>{" "}
            Log in with Facebook
          </button>
          <button onClick={() => signInWithGithub()}>
            <span>
              <FaGithub />
            </span>{" "}
            Log in with Github
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
            onClick={() => navigate(-1)}
          >
            {" "}
            <FaArrowLeft /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
