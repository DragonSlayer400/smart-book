import React from "react";
import './App.css';
import Task from "./component/task/Task";
import tasks from "./data";


function App() {

  const module = {
    title: "Ремонтные работы",
    number: 1
  }


  return (
    <div className="app-body">
        <div className="app-content">
          <Task task={tasks[0]} module={module}/>
        </div>
    </div>
    
  );
}

export default App;
