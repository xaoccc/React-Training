import { useState, useEffect } from "react";
import Task from "./task";
import Loading from "./loading";
import AddToDo from "./addtodo";

export default function AllTasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(
        () => {
            fetch('http://localhost:3030/jsonstore/todos')
                .then((res) => res.json())
                .then((data) => {
                    const tasks = Object.values(data);
                    setTasks(tasks)
                })
                .catch(error => console.log(error))
        }, [])
    console.log(tasks);

    // I cannot change the props in task.jsx, because they are immutable
    // That is why I must return results from calculations there to this file and pass them at props creation
    // 1. This function is called on button click from function changeStatus() in task.jsx
    // 1.1. allTasks contans the most updated state of the lists with tasks
    // 1.2. I use allTasks array instead of tasks, because this is a diffrent variable (don't think it is the same)
    // 1.3. In this array I check if the id is the same as the one I clicked on: task._id === taskId
    // 1.4. If yes, do not change other data, but its status : { ...task, isCompleted: !task.isCompleted }, otherwise do not change the task
    // Not that I do not use a POST/PUT request. The data changes dynamically via useState.
    function changeStatusHandler (taskId) {
        setTasks(allTasks => allTasks.map(task => (task._id === taskId) ? { ...task, isCompleted: !task.isCompleted } : task
        ))
    }
    function addTask() {
         return <AddToDo className='todo' />
    }
    

    return (
        <main className="main">
            <section className="todo-list-container">
                <h1>Todo List</h1>
                <div className="add-btn-container">
                    <button className="btn" onClick={addTask()}>+ Add new Todo</button>
                </div>

                <div className="table-wrapper">
                    {(!tasks) ? <Loading /> : null}
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="table-header-task">Task</th>
                                <th className="table-header-status">Status</th>
                                <th className="table-header-action">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            { addTask }
                            {/* 2. Pass the id, title, status and changeStatusHandler to the props  */}
                            {tasks.map((currentTask) => <Task key={currentTask._id} _id={currentTask._id} title={currentTask.text} status={currentTask.isCompleted} changeStatusHandler={changeStatusHandler} />)}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    )

}