import ExpenseList from "../components/ExpenseList";

function History({expenses , onDelete}) {
  return(
    <ExpenseList  expenses = {expenses}  onDelete = {onDelete}/>
  )
}

export default History;