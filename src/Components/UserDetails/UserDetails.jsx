import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const naviGate = useNavigate();
  let user = useLoaderData();
  const {
    name,
    email,
    address: { city, street, zipcode },
    website,
    company: { name: cname },
  } = user;

  return (
    <div className="container">
      <div style={{ maxWidth: "100%", margin: "30px 0" }} className="user">
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

          <p>
            Description: Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Esse facere illum omnis incidunt voluptatem maiores! Sunt enim
            debitis, molestias delectus impedit, explicabo quaerat repudiandae
            ullam inventore qui ipsum est quae commodi cupiditate. Eius, impedit
            corrupti repudiandae modi culpa temporibus reiciendis et esse rerum
            possimus nemo vel commodi quisquam ipsa fugiat atque odit
            exercitationem earum quae quod totam iusto deleniti? Aut, ea quia
            non tempore id odio! Nihil, atque. Vero similique obcaecati
            recusandae quae earum aliquid incidunt ut cum necessitatibus, in
            cupiditate reiciendis. Rerum est tempora architecto temporibus,
            minus accusantium consequuntur obcaecati culpa nostrum facilis eaque
            ab autem voluptates tenetur odio doloremque nihil, enim quo
            reprehenderit modi et. Ea debitis ducimus rerum ut. Minus nemo eum
            doloribus autem, placeat fugiat? Ducimus possimus numquam itaque
            vel, consequuntur minima esse reiciendis repellendus repudiandae
            amet, ea asperiores necessitatibus saepe a corporis delectus! Quia,
            ducimus fugiat vitae eligendi eveniet iusto dignissimos voluptates
            molestias obcaecati. Eaque ipsa distinctio eos possimus officiis
            amet eveniet perspiciatis maxime laborum impedit harum iusto placeat
            id quod consectetur totam porro reprehenderit nam nemo, aliquid sunt
            ipsam error. Quaerat consectetur laboriosam ipsam, dicta mollitia
            voluptates, fuga quam magni hic inventore, illum sit atque amet
            natus numquam rem neque reprehenderit rerum maxime illo.
          </p>
          <button onClick={() => naviGate(-1)}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
