import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaPlus } from "react-icons/fa";
import FormInputAtom from '../atoms/FormInputAtom';

function AddListModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <FaPlus />{' '}{props.buttonAddListModal}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.titleListModal}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormInputAtom
                            placeholder="Add Title"
                            label="Title"
                            type="text"
                            name="title"
                        // value={name}
                        // style={styleInput}
                        // onChange={handleOnChange}
                        />
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <div className="d-grid gap-2 d-md-flex px-1 justify-content-md-end">
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AddListModal;
// render(<Example />);