import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function Edit({expenses , onUpdate}) {
 const {id} = useParams();
 const expenseToEdit = expenses.find(
  item=>item.id === Number(id)
 );

 if (!expenseToEdit) {
  return <p>Expense not found</p>;
}

 const [title , setTitle] = useState(expenseToEdit.title);
 const [amount , setAmount] = useState(expenseToEdit.amount);
 const [date,setDate] = useState(expenseToEdit.date);
 const [category,setCategory] = useState(expenseToEdit.category);
 const Navigate = useNavigate();

  return(
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md ">
        <h2 className="text-2xl font-semibold mb-6 text-center">Edit Expense </h2>

        <div className="flex flex-col gap-4">
           <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Title:</label>
            <input 
              type="text"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              className="border p-2 rounded-md"
            />
           </div>

           <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Amount :</label>
            <input 
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border p-2 rounded-md"
            />
           </div>
            
             <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Date :</label>
            <input 
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border p-2 rounded-md"
            />
           </div>

         <select 
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          className="flex flex-col border  border-gray-300  p-2">
            <option value="Food" >Food</option>
            <option value="Travel">Travel</option>
            <option value="Bills">Bills</option>
            <option value="Shopping">Shopping</option>
          </select>


         </div>

          <button
           onClick={()=>{
            const updatedExpense = {
              id:expenseToEdit.id,
              title,
              amount:Number(amount),
              date,
              category
              
            };
            onUpdate(updatedExpense);
            Navigate("/history");
           }}
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md w-full"
      >
        Save Changes
      </button>

      </div>
    </div>
  )
}

export default Edit;