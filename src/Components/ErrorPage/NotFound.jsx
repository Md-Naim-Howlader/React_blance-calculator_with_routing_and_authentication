import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h2>Opps!</h2>
      <p>Sorry!, an unexpected error has accurred.</p>
    </div>
  );
};

export default NotFound;
