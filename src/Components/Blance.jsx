import { useContext } from "react";
import { TransectionContext } from "../Context/TransectionContext";

const Blance = () => {
  const { transections } = useContext(TransectionContext);

  let amountArr = transections.map((transection) => transection.amount);
  let amount = 0;
  for (let item of amountArr) {
    amount += +item;
  }

  return (
    <div>
      <h3>Your Blance</h3>
      <h1>Blance: ${amount} </h1>
    </div>
  );
};

export default Blance;
