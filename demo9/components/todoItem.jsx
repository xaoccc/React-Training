import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import { useContext } from 'react';
import { TodoContext } from '../contexts/todoContext';



export default function ToDoItem({todo}) {
    const { DeleteToDo } = useContext(TodoContext);

    return (
        <ListGroup.Item >
            <div className="todo">
                <div className="todo-info">
                    <p>{todo.text}</p> 
                    <p>Completed: {(todo.isCompleted) ? 'Yes' : 'No' }</p> 
                </div>
                <div>
                <Button variant="dark" onClick={() => DeleteToDo(todo._id)}>X</Button> 

                </div>
 
                
            </div>       
        </ListGroup.Item>
    )
}