import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function ExpenseForm({onAddExpense}) {
   const [text,setText] = useState("");
   const [date,setDate] = useState("");
   const [amount,setAmount] = useState("");
   const [category,setCategory] = useState("");
   const navigate = useNavigate();


  const numericAmount = Number(amount);

  function buttonHandler() {
   if(text.trim()==="") {
    alert("Please enter a valid title");
    return;
   }
 
    if(amount === "" || numericAmount<=0) {
      alert("Amount must be greater tham 0");
      return;
    }

    if(category === "") {
      alert("please select a category");
      return;
    }

    if(date==="") {
      alert("please select date");
      return;
    }

    const selectedDate = new Date(date);
    const today = new Date();

    if(selectedDate>today) {
      alert("date con not be in future");
      return;
    }
        
      const newExpense = {
            id:Date.now(),
            title:text,
            date:date,
            amount:Number(amount),
            category:category
          };

       onAddExpense(newExpense);
       navigate("/history");
       setText("");
       setDate("");
       setAmount("");   
       setCategory("");

   }



  return(
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
       <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
         <h1 className="text-2xl font-semibold text-gray-700 text-center mb-6">Add New Expense</h1>

        <div className="flex flex-col gap-4">
          
          <div className="flex flex-col">
           <label className="text-sm font-medium text-gray-600 mb-1">Title : </label>
           <input 
            type="text"
            placeholder="Where you spend "
            value={text}
            onChange={(e)=> setText(e.target.value)}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
           />
         </div>
         
          <div className="flex flex-col">
           <label className="text-sm font-medium text-gray-600 mb-1">Date : </label>
           <input 
            type="Date"
            value={date}
            onChange={(e)=> setDate(e.target.value)}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
           />
          </div>

         <div className="flex flex-col">
         <label className="text-sm font-medium text-gray-600 mb-1">Amount : </label>
         <input 
            type="number"
            value={amount}
            onChange={(e)=> setAmount(e.target.value)}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          </div>

          <select 
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          className="flex flex-col border  border-gray-300  p-2">
            <option value="" >select category</option>
            <option value="Food" >Food</option>
            <option value="Travel">Travel</option>
            <option value="Bills">Bills</option>
            <option value="Shopping">Shopping</option>
          </select>

        </div>

         <button 
        onClick={()=>{
          buttonHandler();
          
        }}
           className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-1 rounded-md transition">
          Add Expense
        </button>

    

       </div>
    </div>
  )
}

export default ExpenseForm;