import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  const [form, setForm] = useState({
    text: "",
    category: "Code"
  });

  const handleChange = (e) =>{
    console.log(e.target.value)
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
   
  }

  const handleSubmit=(e) => {
    e.preventDefault()
    onTaskFormSubmit(form)
    setForm({
      text: "",
      category: "Code"
    })
  }
  
  const dropCat = [...categories].splice(1)
  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleChange} value={form.text}  type="text" name="text"/>
      </label>
      <label>
        Category
        <select value={form.category} onChange={handleChange} name="category">
          {dropCat.map(cat =><option key={cat}>{cat}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
