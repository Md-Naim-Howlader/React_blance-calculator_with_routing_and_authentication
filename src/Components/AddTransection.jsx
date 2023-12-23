import { useState, useContext } from "react";
import { TransectionContext } from "../Context/TransectionContext";
import { addTransection } from "../Reducer/actions";
const AddTransection = () => {
  const { dispatch } = useContext(TransectionContext);
  const [inputData, setInputData] = useState({ text: "", amount: "" });
  // destructure inputData
  const { text, amount } = inputData;
  const handleChange = (e) => {
    const fieldName = e.target.name;
    setInputData({ ...inputData, [fieldName]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransection = {
      text,
      amount,
      id: new Date().getTime(),
    };

    addTransection(dispatch, newTransection);
    setInputData({ text: "", amount: "" });
  };
  return (
    <div className="addTranseciton">
      <h3 className="borderBottom">Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">
            Text: <br />
          </label>
          <input
            required
            onChange={handleChange}
            value={text}
            type="text"
            name="text"
            id="text"
            placeholder="Enter Text"
          />
        </div>
        <div>
          <label htmlFor="amount">
            Amount: <br /> (negative - expense, positive - income)
          </label>
          <input
            required
            onChange={handleChange}
            value={amount}
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter Amount"
          />
        </div>
        <button>Add Transection</button>
      </form>
    </div>
  );
};

export default AddTransection;
