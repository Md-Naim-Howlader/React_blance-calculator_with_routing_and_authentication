import { useLoaderData } from "react-router-dom";
import User from "../../Components/User/User";
import "./users.css";
const Users = () => {
  const data = useLoaderData();

  return (
    <div className="container">
      <div className="users">
        {data.length > 0 &&
          data.map((user) => <User key={user.id} user={user} />)}
      </div>
    </div>
  );
};

export default Users;
