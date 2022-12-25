import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaPlus } from "react-icons/fa";
import FormInputAtom from '../atoms/FormInputAtom';

function AddCategoryModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                <FaPlus />{' '}{props.buttonModalCategory}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.titleModalCategpry}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormInputAtom
                            placeholder="Category"
                            label="Category"
                            type="text"
                            name="name"
                        // value={name}
                        // style={styleInput}
                        // onChange={handleOnChange}
                        />
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

export default AddCategoryModal;
// render(<Example />);