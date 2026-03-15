import { useNavigate } from "react-router-dom";

function ExpenseList({expenses, onDelete}) {
  const navigate = useNavigate();

  if(!expenses || expenses.length === 0) {
    return <p  className="text-center mt-5 text-3xl">No expenses added yet </p>
  }

  return(
    <div className="mt-10 px-4">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">All Expenses </h2>
      { expenses.map((item) => (
        <div 
        key={item.id}
        className="flex justify-between items-center 
                     bg-gray-100 rounded-xl shadow-sm 
                     hover:shadow-md transition 
                     p-5 mb-4 max-w-3xl mx-auto border border-gray-100" 
        > 
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
          <p  className="text-sm text-gray-500">{item.date}</p>
          <p className="text-sm text-gray-500">[{item.category}]</p>
        </div>

        
          <p className="text-lg font-bold text-blue-600">₹ {item.amount}</p>
          <button
           onClick={()=>onDelete(item.id)}
           className="border p-1 rounded-md px-2 bg-red-500 mt-1 shadow-md">Delete</button>

           <button 
           onClick={()=> {
             navigate(`/edit-page/${item.id}`)
             
           }}
           className="border p-1 rounded-md px-2 bg-red-500 mt-1 shadow-md">Edit </button>
        

         </div>

      ))
       
      }
    </div>
  )
}

export default ExpenseList;