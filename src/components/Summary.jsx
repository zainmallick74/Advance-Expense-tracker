
function Summary({expenses}) {

  if(!expenses || expenses.length===0) {
    return <p className="text-center mt-5 text-3xl">No data Vailable</p>
  }
  
  //Totl spending
  const totalSpent = expenses.reduce((acc,item)=> {
    return acc+Number(item.amount);
  },0);

  //total transaction 
  const totalTransaction = expenses.length;

  //average spending
  const average = totalTransaction === 0? 0: totalSpent/totalTransaction;
  
  const highestExpense = expenses.length === 0 ?0 :
  expenses.reduce((max,item) => 
  Number(item.amount)>max?Number(item.amount) : max,
   0);
  
  
  return(
   <div className=" flex flex-col justify-center items-center border min-h-screen">
   
   <div className="bg-gray-100 w-full max-w-3xl rounded-2xl shadow-xl p-10">
       <h2 className="text-lg font-semibold text-gray-800 text-center">Expense Summary</h2>

     <div className="flex justify-between items-center border-b pb-3 mt-5">
       <span className="text-gray-600">Total spent : </span>
       <span  className="text-xl font-semibold text-blue-600">₹ {totalSpent.toLocaleString()}</span>
     </div>

     <div className="flex justify-between items-center border-b pb-3">
      <span className="text-gray-600">Transaction : </span>
      <span  className="text-lg font-medium text-gray-800">{totalTransaction}</span>
     </div>

     <div className="flex justify-between items-center border-b pb-3">
      <span className="text-gray-600">Average : </span>
      <span  className="text-lg font-medium text-gray-800">₹ {average.toFixed(2)}</span>
     </div>

     <div className="flex justify-between items-center border-b pb-3">
      <span className="text-gray-600">Highest Expense : </span>
      <span  className="text-lg font-medium text-gray-800">{highestExpense.toLocaleString()}</span>
     </div>

   </div>

   </div>
  )
}

export default Summary;