import React from 'react';
import Button from 'react-bootstrap/Button';

function ButtonAtom(props) {
    return (
        <div className="d-grid gap-2">
            <Button
                as={props.as}
                type={props.type}
                value={props.value}
                style={props.style}
                variant={props.variant}
            >
                {props.title}
            </Button>
        </div>
    );
};

export default ButtonAtom;