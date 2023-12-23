import { NavLink } from "react-router-dom";
import { header, headerContainer, btn } from "./header.module.css";
import { FaUserCircle } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { TbLogin } from "react-icons/tb";
import { toast } from "react-toastify";
// auth
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useEffect } from "react";
const Header = () => {
  const [user, setUser] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleSignOut = () => {
    signOut();
    toast.success("Log Out Succesfully");
  };

  useEffect -
    (() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      });
    });

  return (
    <header className={header}>
      <div className={headerContainer}>
        <div>
          <img
            src="https://logos-world.net/wp-content/uploads/2021/02/Simple-Logo.png"
            alt="logo"
          />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            {user ? (
              ""
            ) : (
              <li className={btn}>
                <NavLink className={btn} to="/signUp">
                  Sign Up
                </NavLink>
              </li>
            )}
            <li className={btn} style={{ background: "#2c3e50" }}>
              {user ? (
                <button
                  title="Log Out"
                  onClick={handleSignOut}
                  style={{ background: "#2c3e50", border: "none" }}
                  className={btn}
                >
                  Log Out <TbLogout2 />
                </button>
              ) : (
                <NavLink
                  title="Log In"
                  style={{ background: "#2c3e50" }}
                  className={btn}
                  to="/login"
                >
                  Log In <TbLogin />
                </NavLink>
              )}
            </li>
            <li>
              {user && (
                <NavLink>
                  <FaUserCircle
                    style={{ fontSize: "25px", marginRight: "5px" }}
                  />
                  <span style={{ position: "relative", bottom: "5px" }}>
                    {user?.displayName}
                  </span>
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
