import { useContext } from "react";
import Transection from "./Transection";
import { TransectionContext } from "../Context/TransectionContext";

const TransectionList = () => {
  const { transections } = useContext(TransectionContext);

  return (
    <div className="transectionList">
      <h2 className="borderBottom">Blance Histroy</h2>
      {transections.map((transection) => (
        <Transection key={transection.id} transection={transection} />
      ))}
    </div>
  );
};

export default TransectionList;
