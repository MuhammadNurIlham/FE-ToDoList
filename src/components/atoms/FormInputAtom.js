import React from 'react';
import Form from 'react-bootstrap/Form';


function FormInputAtom(props) {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>{props.label}</Form.Label>
                    <Form.Control
                        type={props.type}
                        placeholder={props.placeholder}
                        name={props.name}
                        value={props.value}
                        as={props.as}
                        rows={props.rows}
                    />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group> */}
            </Form>
        </div>
    )
}

export default FormInputAtom;