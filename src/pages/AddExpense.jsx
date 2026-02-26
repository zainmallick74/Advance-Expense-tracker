import ExpenseForm from "../components/ExpenseForm";

function AddExpense({onAddExpense}) {
  return(
    
       <ExpenseForm  onAddExpense = {onAddExpense}/>
    
  )
}

export default AddExpense;