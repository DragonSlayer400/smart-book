import React from "react";
import TabBar from "../tab/TabBar";

const Task = (
    { task, module }
) => {
  
    const steps = task.steps

    return (
        <div>
            <h1>Модуль { module.number }. { module.title }</h1>
            <h2>Задача { task.number }. { task.title }</h2>
            <TabBar content={ steps } />
        </div>
    )
}


export default Task;