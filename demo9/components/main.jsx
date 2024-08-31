import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react';
import ToDoItem from './todoItem';
import Button from 'react-bootstrap/Button';
import ToDo from './addToDo';

export default function Main() {

    const [todos, setTodos] = useState([]);
    const [add, setAdd] = useState(false);
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
    
    function showModal() {
        setAdd(true);
    }

    function hideModal() {
        setAdd(false);
    }

    const onTodoAdd = async (values) => {
        console.log(values)
        fetch(baseUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...values, isCompleted: false})
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setTodos(state => [...state, data])


            })
        .catch((error) => console.log(error))
    }



    return (
        <>
        
            <ListGroup className='w-25 mx-auto'>
                <h1>ToDo List</h1>
                { todos.map((todo) =>  <ToDoItem key={todo._id} todo={todo} /> )}
                
            </ListGroup>
            {(add) ? <ToDo hideModal={hideModal} onTodoAdd={onTodoAdd}  /> : null }
            

            <Button onClick={showModal} variant="primary" >Create ToDo</Button>{' '}
        </>

        
        
    );
}
