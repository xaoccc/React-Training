import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react';
import ToDoItem from './todoItem';

export default function Main() {

    const [todos, setTodos] = useState([]);
    const baseUrl = 'http://127.0.0.1:3030/jsonstore/todos';

    useEffect(() => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                setTodos(Object.values(data));
                console.log(data);
            })
            .catch(error => console.error(error));
        }, []);
    

    return (
        
        <ListGroup className='w-25 mx-auto'>
            <h1>ToDo List</h1>
            { todos.map((todo) =>  <ToDoItem key={todo._id} todo={todo} /> )}
        </ListGroup>
        
    );
}
