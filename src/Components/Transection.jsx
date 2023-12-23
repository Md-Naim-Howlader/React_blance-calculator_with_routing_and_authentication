import { useContext } from "react";
import { TransectionContext } from "./../Context/TransectionContext";
import { deleteTransection } from "../Reducer/actions";
import { MdDelete } from "react-icons/md";

const Transection = ({ transection }) => {
  const { dispatch } = useContext(TransectionContext);
  const { id, text, amount } = transection;

  const handleDelete = (id) => {
    deleteTransection(dispatch, id);
  };

  const sign = amount > 0 ? "+" : `-`;

  return (
    <div>
      <div className={amount > 0 ? "transection plus" : "transection minus"}>
        <div className="transectionItem">
          <p>{text}</p>
          <p>
            {sign} {Math.abs(amount)}
          </p>
        </div>
        <div className="btn">
          <button onClick={() => handleDelete(id)} title="Delete">
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transection;
