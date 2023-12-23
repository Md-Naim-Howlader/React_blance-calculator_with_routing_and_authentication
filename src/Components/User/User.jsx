import { NavLink } from "react-router-dom";

const User = ({ user }) => {
  const {
    id,
    name,
    email,
    address: { city, street, zipcode },
    website,
    company: { name: cname },
  } = user;
  return (
    <div className="user">
      <div className="card-image">
        <img
          src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.webp?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q="
          alt="user"
        />
      </div>
      <div className="card-body">
        <h2>Name: {name}</h2>
        <p>Email: {email}</p>
        <p>city: {city}</p>
        <p>Street: {street}</p>
        <p>Zipcode: {zipcode}</p>
        <p>Company Name: {cname}</p>
        <p>Website: {website}</p>

        <NavLink to={`/users/${id}`}>
          <button>User Details</button>
        </NavLink>
      </div>
    </div>
  );
};

export default User;
