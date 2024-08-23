export default function AddToDo() {
    function createTask() {
        console.log('create task');
    }

    return (

                <tr _id="task_101" className='todo'>
                    <td>
                        <input type="text" />
                    </td>
                    <td>
                        <input type="text" />
                    </td>
                    <td className="todo-action">
                        <button type="submit" className="btn todo-btn" onClick={createTask}>Add Task</button>
                    </td>
                </tr>

    )
}