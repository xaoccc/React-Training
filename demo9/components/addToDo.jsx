import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import {useForm} from '../hooks/useForm';

 
export default function ToDo({ hideModal, onTodoAdd }) {

    const {formValues, onChangeHandler, createToDo} = useForm ({text: ''}, onTodoAdd, hideModal);   




    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >

            <Modal show={true}>
                <Modal.Header closeButton onHide={hideModal}>
                    <Modal.Title>Add ToDo</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={createToDo}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>ToDo</Form.Label>
                            <Form.Control type="text" name="text"  value={formValues.name} onChange={onChangeHandler} placeholder="Enter ToDo" />
                        </Form.Group>
                        <Button variant="secondary" onClick={hideModal} >Close</Button>
                        <Button variant="primary" type='submit'>Create</Button>

                    </Form>
                </Modal.Body>
            </Modal>

        </div>
    )
}