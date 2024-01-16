import lodingImg from "../../assets/images/ZNeT.gif";

const Loading = () => {
  return (
    <div
      style={{ textAlign: "center", padding: "170px 0" }}
      className="container"
    >
      <h3> Loading...</h3>
      <img
        style={{ width: "100px", marginTop: "30px" }}
        src={lodingImg}
        alt=""
      />
    </div>
  );
};

export default Loading;
