import ExpenseForm from "../components/EpenseForm";

function AddExpense({onAddExpense}) {
  return(
    
       <ExpenseForm  onAddExpense = {onAddExpense}/>
    
  )
}

export default AddExpense;