import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [tasks, setTasks]=useState(TASKS);
  const [category, setCategory] = useState('All');
 
  
  
  const selectCategory = (cat) =>(
    setCategory(cat)
  )

  const handleDelete = (text) => {
    const updatedTasks = tasks.filter(task => task.text !== text);
    setTasks(updatedTasks)
  }


  const showTasks = tasks.filter(task =>{
    if(category === "All") return true;
    
    return task.category === category;
  })

  const onTaskFormSubmit = (taskObj) =>{
    const allTasks = [...tasks, taskObj]
    setTasks(allTasks)
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categorySet={category} categories={CATEGORIES} onSelect={selectCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={showTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
