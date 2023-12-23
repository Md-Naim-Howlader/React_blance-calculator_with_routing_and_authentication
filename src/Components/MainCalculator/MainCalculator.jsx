import { useReducer } from "react";
import AddTransection from "../AddTransection";
import Blance from "../Blance";
import IncomeExpense from "../IncomeExpense";
import Title from "../Title";
import { reducer } from "../../Reducer/reducer";
import { initialState } from "../../InitialState/initialState";
import { TransectionContext } from "./../../Context/TransectionContext";
import TransectionList from "../TransectionList";
import "./mainCalculator.css";
const MainCalculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    transections: state.transections && state.transections,
    dispatch,
  };
  return (
    <div className="container">
      <Title />
      <div className="cardContainer">
        <TransectionContext.Provider value={value}>
          <div className="card">
            <Blance />
            <IncomeExpense />
            <TransectionList />
            <AddTransection />
          </div>
        </TransectionContext.Provider>
      </div>
    </div>
  );
};

export default MainCalculator;
