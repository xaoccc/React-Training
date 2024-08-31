import ListGroup from 'react-bootstrap/ListGroup';


export default function ToDoItem({todo}) {
    return (
        <ListGroup.Item  action>
            {todo.text}
            <p>Completed: {(todo.isCompleted) ? 'Yes' : 'No' }</p>            
        </ListGroup.Item>
    )
}