import React from 'react'
// import ButtonAtom from './atoms/ButtonAtom';
import FormInputAtom from './atoms/FormInputAtom';
import { FaPlus } from "react-icons/fa";

function CardComponent() {
    // const style = {
    //     padding: 0,
    //     margin: 0,
    // };

    const styleInput = {
        background: "#E1DEDE",
        borderRadius: "6px",
        border: "none"
    }

    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0 p-4">

                    <div className="col-md-4">
                        <h5 className="card-title">All Tasks</h5>
                        <p>Favorite</p>
                        <p>Work</p>
                        <p>Study</p>
                        <p>Sport</p>
                        <p>Meeting</p>
                        {/* <ButtonAtom title="Add New Category" variant="none" style={style} /> */}
                        <p className='buttonAdd'><FaPlus />{' '}New Category</p>

                    </div>

                    <div className="col-md-8">

                        <div className="card-body pe-5">
                            <h5 className="card-title">All Tasks</h5>
                            <FormInputAtom
                                type="text"
                                name="addTask"
                                placeholder="Add a new task"
                                style={styleInput}

                            />

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="checked" id="flexCheckDefault" />
                                <label className="form-check-label text-decoration-line-through" for="flexCheckDefault">
                                    Continues learning Javascript <span class="badge bg-primary">Work</span>
                                </label>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardComponent;