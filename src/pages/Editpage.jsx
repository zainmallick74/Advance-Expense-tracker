import Edit from "../components/Edit";

function EditPage({expenses, onUpdate}) {
  return (
    <div>
       <Edit expenses = {expenses} onUpdate={onUpdate}/>
    </div>
  )
}

export default EditPage;