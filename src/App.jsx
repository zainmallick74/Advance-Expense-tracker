import { useEffect, useState } from 'react';
import { Routes,Route, useNavigate  } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddExpense from './pages/AddExpense';
import History from './pages/History';
import MonthlySummary from './pages/MonthlySummary';
import EditPage from './pages/Editpage';


function App() {
  const [expenses , setExpenses] =useState([]);
  const navigate= useNavigate();

  //Load data when App starts
  useEffect(()=> {
    const savedExpenses = localStorage.getItem("expenses");

      if(savedExpenses) {
        setExpenses(JSON.parse(savedExpenses));
      }
  },[]);

  //save data whenever expeses changes:

  useEffect(()=> {
    localStorage.setItem("expenses",JSON.stringify(expenses));
  },[expenses]);

  function deleteHandler(id) {
    setExpenses(prev => prev.filter(item => item.id!==id));
  }

  function addExpenseHandler(newExpense) {
    setExpenses((prev) => [...prev , newExpense]);
  }

  function updateExpenseHandler(updatedExpense) {
      setExpenses( prev => 
        prev.map(item=>
          item.id === updatedExpense.id?
          updatedExpense : item
        )

      );
  }

  return (
    <div>

    <div className=" mx-auto flex justify-between items-center px-8 py-4  bg-gray-100">
    
    {/* Logo / App Name */}
    <h1 className="text-xl font-bold text-gray-800 tracking-wide">
      Expense Tracker
    </h1>

    {/* Navigation Buttons */}
    <div className="flex gap-6">

        <button
        onClick={() => navigate("/")}
        className="text-gray-600 hover:text-blue-600 font-medium transition"
        >
        Home
      </button>
      
      <button
        onClick={() => navigate("/add-expense")}
        className="text-gray-600 hover:text-blue-600 font-medium transition"
      >
        Add Expense
      </button>

      <button
        onClick={() => navigate("/history")}
        className="text-gray-600 hover:text-blue-600 font-medium transition"
      >
        History
      </button>

      <button
        onClick={() => navigate("/monthly-summary")}
        className="text-gray-600 hover:text-blue-600 font-medium transition"
      >
        Summary
      </button>

    </div>
  </div>

      <Routes>
        <Route path='/' element={<Dashboard expenses={expenses}/>} />
        <Route path='/add-expense' element={<AddExpense onAddExpense = {addExpenseHandler} />} />
        <Route path='/history' element={<History expenses={expenses}  onDelete = {deleteHandler}  />} />
        <Route path='/monthly-summary' element={<MonthlySummary expenses={expenses} />} />
        <Route path='/edit-page/:id' element={<EditPage expenses = {expenses} onUpdate={updateExpenseHandler} />} />

      </Routes>
    </div>
  )
}

export default App;
