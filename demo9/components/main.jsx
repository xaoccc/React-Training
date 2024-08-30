import ListGroup from 'react-bootstrap/ListGroup';

export default function Main() {
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
