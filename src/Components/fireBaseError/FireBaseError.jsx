import { NavLink, useNavigate } from "react-router-dom";

const FireBaseError = ({ errorName }) => {
  console.log(errorName);
  const naviGate = useNavigate();
  return (
    <div style={{ textAlign: "center", padding: "150px 0" }}>
      <img
        src="https://www.freeiconspng.com/thumbs/error-icon/error-icon-15.png"
        alt="error"
      />
      <h1 style={{ color: "red" }}>Error: {errorName}</h1>
      <button
        onClick={() => naviGate(-1)}
        style={{
          border: "none",
          background: "#2980b9",
          textDecoration: "none",
          color: "#fff",
          fontSize: "17px",
          padding: "9px 15px",
          cursor: "pointer",
          margin: "0 10px",
          borderRadius: "5px",
        }}
      >
        <NavLink style={{ textDecoration: "none", color: "#fff" }}>
          Go Back
        </NavLink>
      </button>
      <button
        style={{
          border: "none",
          background: "#16a085",
          textDecoration: "none",
          color: "#fff",
          fontSize: "17px",
          padding: "9px 15px",
          cursor: "pointer",
          margin: "0 10px",
          borderRadius: "5px",
        }}
      >
        <NavLink style={{ textDecoration: "none", color: "#fff" }} to="/">
          Go Home
        </NavLink>
      </button>
    </div>
  );
};

export default FireBaseError;
