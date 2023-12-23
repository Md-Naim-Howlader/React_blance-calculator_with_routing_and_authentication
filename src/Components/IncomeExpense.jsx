import { useContext } from "react";
import { TransectionContext } from "../Context/TransectionContext";

const IncomeExpense = () => {
  const { transections } = useContext(TransectionContext);
  let negetiveValue = 0;
  let positiveValue = 0;

  for (let item of transections) {
    let amount = +item["amount"];

    if (amount > 0) {
      positiveValue += amount;
    } else {
      negetiveValue += amount;
    }
  }

  return (
    <div className="incomeExpense">
      <div className="income">
        <h3>Income</h3>
        <h3 className="incomeBlance">$ {positiveValue}</h3>
      </div>
      <div className="expense">
        <h3>Expense</h3>
        <h3 className="expenseBlance">$ {negetiveValue}</h3>
      </div>
    </div>
  );
};

export default IncomeExpense;
