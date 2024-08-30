import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react';

export default function Main() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:3030/jsonstore/todos')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
        }, []);
    

    return (
        
        <ListGroup className='w-25 mx-auto'>
            <h1>ToDo List</h1>
            <ListGroup.Item action>
                Link 1
            </ListGroup.Item>
            <ListGroup.Item action>
                Link 2
            </ListGroup.Item>
            <ListGroup.Item action>
                This one is a button
            </ListGroup.Item>
        </ListGroup>
        
    );
}
