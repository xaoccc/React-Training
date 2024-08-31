import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react';

export default function ToDoItem({todo}) {
    return (
        <ListGroup.Item  action>
            {todo.text}
            <p>Completed: {(todo.isCompleted) ? 'Yes' : 'No' }</p>            
        </ListGroup.Item>
    )
}