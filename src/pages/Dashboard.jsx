import { useNavigate } from "react-router-dom";
import CategorySummary from "../components/categorySummary";

function Dashboard({expenses}) {

   const navigate = useNavigate();

  return(
    <div className="flex flex-col">
    <CategorySummary expenses={expenses}/>
      
    </div>
  )
}

export default Dashboard;